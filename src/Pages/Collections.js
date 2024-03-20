import { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Input,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { DrawerWithNavigation } from "../Components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendar, faEnvelope, faFaceMeh, faFaceSadCry, faFaceSmile, faFile, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { DefaultTable } from "../Components/Table";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer";
import BarChart from "../Components/BarChart";
import Modal from "../Components/ModalCreate";
import { Link } from "react-router-dom";

const Collections = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, [scrolled]);

  return (
    <>
      <Navbar
        className={`sticky top-0 z-50 px-4 py-2 border-b border-gray-300 ${
          scrolled ? "bg-[#1b1b35] text-white" : "bg-[#1b1b35] text-yellow-50"
        }`}
        fullWidth
      >
        <div className="flex items-center justify-between ">
          <div className="flex justify-center">
            <Button
              ripple={false}
              variant="text"
              className="active:bg-transparent hover:bg-transparent"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon className="text-base text-white" icon={faBars} />
            </Button>
            <Logo />
          </div>
          {/* <div>
            <div className="flex justify-center items-center">
              <Typography variant="h6">Username</Typography>
              <div>
                <div className="w-72">
                  <Select
                    className=" !border-transparent"
                    labelProps={{
                      className:
                        "before:content-none after:content-none border-none",
                    }}
                  >
                    <Option className="w-72">Profile</Option>
                    <Option className="w-72">Billing</Option>
                    <Option className="w-72">Logout</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Navbar>
      
      <DrawerWithNavigation open={open} setOpen={setOpen} />
      <main onClick={() => setOpen(false)} className=" bg-[#1b1b35]">
        <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto justify-between items-center">
          <Typography
            variant="h4"
            className="self-center sm:self-start font-semibold text-cyan-50 bg-[#323262] px-4 py-2 rounded-lg  shadow"
          >
            Analysis Collections
          </Typography>
          <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
           
            <div className="self-center sm:self-end md:w-auto mr-4">
              
              <Modal/>
            </div>
            <div className="self-center sm:self-end md:w-auto">
           
         
            </div>
          </div>
        </div>

        
       
        <div className="graphs_sec mb-10 flex flex-wrap mt-10 w-11/12 mx-auto">

        <div class="flex flex-wrap -m-4 text-center w-full mb-2">
      
        
   



    <div class="ag-courses_item shadow-lg">
      <Link to="/dashboard" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Product # 1 Dataset&#160; <br/> See Analysis
        </div>

        <div class="ag-courses-item_date-box">
         
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </Link>
    </div>


    <div class="ag-courses_item shadow-lg">
      <Link to="/dashboard" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Product # 2 Dataset&#160; <br/> See Analysis
        </div>

        <div class="ag-courses-item_date-box">
         
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </Link>
    </div>


    <div class="ag-courses_item shadow-lg">
      <Link to="/dashboard" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Product # 3 Dataset&#160;+ See Analysis
        </div>

        <div class="ag-courses-item_date-box">
        
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </Link>
    </div>


    <div class="ag-courses_item shadow-lg">
      <Link to="/dashboard" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Product # 4 Dataset&#160;+ See Analysis
        </div>

        <div class="ag-courses-item_date-box">
         
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </Link>
    </div>



    </div>


         
          
         
        </div>
       
        <Footer />
      </main>
    </>
  );
};

export default Collections;
