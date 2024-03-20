import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const [dataSetName, setDataSetName] = React.useState("");
  const [csvFile, setCSVFile] = React.useState(null);

  const handleOpen = () => setOpen((cur) => !cur);

  const handleDataSetNameChange = (event) => {
    setDataSetName(event.target.value);
  };

  const handleCSVFileChange = (event) => {
    const file = event.target.files[0];
    setCSVFile(file);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="mr-0 md:mr-3 mt-3 lg:mt-0 bg-[#3ae3a6] text-gray-900"
      >
        <FontAwesomeIcon className="mr-2 " icon={faPlusCircle} />
        ADD NEW COLLECTION
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] md:border-gray-300 text-gray-200 bg-[#1b1b35]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4">
              <FontAwesomeIcon className="mr-2 " icon={faPlusCircle} />
              ADD NEW Reviews Collections
            </Typography>
            <Typography
              className="mb-3 text-gray-300 font-normal"
              variant="paragraph"
                        >
              Enter the Dataset Name and select a CSV file.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Data Set Name
            </Typography>
            <Input
              label="Reviews Data Set Name"
              size="lg"
              value={dataSetName}
              onChange={handleDataSetNameChange}
            />
            <Typography className="-mb-2" variant="h6">
              Select CSV File
            </Typography>
            <input
              type="file"
              accept=".csv"
              onChange={handleCSVFileChange}
            />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="teal" onClick={handleOpen} fullWidth>
              POST
            </Button>
           
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
