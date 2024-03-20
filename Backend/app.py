
import string
import numpy as np
import pandas as pd
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import requests
# from bs4 import BeautifulSoup
import re
import pickle
import sklearn
from flask import Flask , request
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import hashlib
from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import datetime
import hashlib


import os
# import tensorflow as tf
# from pymongo import ObjectId
from bson.objectid import ObjectId
import nltk
# nltk.download('stopwords')
from nltk.corpus import stopwords




import requests

from io import BytesIO

def open_image_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if request was successful
        image = Image.open(BytesIO(response.content))
        return image
    except Exception as e:
        print("Error:", e)
        return None

app = Flask(__name__)
jwt = JWTManager(app) # initialize JWTManager
app.config['JWT_SECRET_KEY'] = '38dd56f56d405e02ec0ba4be4607eaab'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
app.config['UPLOAD_FOLDER'] = 'csv_data'
#region  
client = MongoClient('mongodb+srv://aza-e-hussain:cz9Am1Y4VJHrf8ZY@cluster0.oakgoec.mongodb.net/')
#endregion


db=client.sentimental_analysis


user = db.user
result = db.result

tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

def sentiment_score(review):
    tokens = tokenizer.encode(review, return_tensors='pt')
    result = model(tokens)
    return int(torch.argmax(result.logits))+1
def text_process(review):
    nopunc = [char for char in review if char not in string.punctuation]
    nopunc = ''.join(nopunc)
    return [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]
with open('model.pkl', 'rb') as f:
    loaded_model = pickle.load(f)

ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS







@app.route('/', methods=('GET', 'POST'))
def index():
    if request.method == "GET":
    #    doctor.insert_one({"name":"zaryab"})
       return 'saved'




# region begin for user


@app.route("/api/user/signup",methods=["POST"])
def userregister():
    if request.method == "POST":
        new_user = request.get_json() # store the json body request
        # Creating Hash of password to store in the database
        new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() # encrpt password
        # Checking if user already exists
        doc = user.find_one({"username": new_user["username"]}) # check if user exist
        # If not exists than create one
        if not doc:
            # Creating user
            new_user["createdAt"]= datetime.datetime.today()
            user.insert_one(new_user)
            return jsonify({'msg': 'User created successfully'}), 201
        else:
            return jsonify({'msg': 'Username already exists'}), 409
        




@app.route("/api/user/login", methods=["post"])
def userlogin():
    # Getting the login Details from payload
    login_details = request.get_json() # store the json body request
    # Checking if user exists in database or not
    user_from_db = user.find_one({'username': login_details['username']})  # search for user in database
    # If user exists
    if user_from_db:
        # Check if password is correct
        encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
        if encrpted_password == user_from_db['password']:
            # Create JWT Access Token
            access_token = create_access_token(identity=user_from_db['username']) # create jwt token
            # Return Token
            return jsonify(access_token=access_token), 200
    return jsonify({'msg': 'The username or password is incorrect'}), 401    


@app.route("/user/sentimental/upload",methods=["POST"])
def sentimental():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        print(filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        df=pd.read_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        df.columns = map(str.upper, df.columns)
        
        # Ensure 'review' column exists
        if 'REVIEW' not in df.columns:
            return jsonify({'error': 'No review column in the dataframe'}), 400
        else:
            try:
                df['sentiment'] = df['REVIEW'].apply(lambda x: sentiment_score(x[:512]))
                predictions = loaded_model.predict(df['REVIEW'])
                df['Predictions']=predictions
                df['Predictions']= df['Predictions'].apply(lambda x: 'Fake' if x == 'CG' else 'Genuine')

            except TypeError or ValueError:
                return jsonify({'error': 'Error calculating sentiment score. Type Error or Value error'}), 400
        json=df.to_json(orient='records', indent=4)
        return json


        # return jsonify({'message': 'File successfully uploaded'}), 200
    else:
        return jsonify({'error': 'Allowed file types are csv'}), 400





if __name__ == "__main__" :
    # setup()
    app.run(debug=True)