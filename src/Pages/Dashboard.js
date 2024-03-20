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

const Dashboard = () => {
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
            Detection and Analysis Portal
          </Typography>
          <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
           
            <div className="self-center sm:self-end md:w-auto mr-4">
              <Button className="mr-0 md:mr-3 mt-3 lg:mt-0 bg-[#3ae3a6] text-gray-900">
                <FontAwesomeIcon className="mr-2 " icon={faSearch} />
                Generate Insights
              </Button>
            </div>
            <div className="self-center sm:self-end md:w-auto">
            <button className="mr-0 md:mr-3 mt-3 lg:mt-0 flex justify-center items-center  rounded-lg bg-[#3ae3a6] text-gray-900">
              <label htmlFor="csv-file" className=" cursor-pointer py-2 px-4  object-cover uppercase font-semibold text-sm">
                <FontAwesomeIcon className="mr-2 " icon={faFile} />
                Upload CSV File 
                <input type="file" id="csv-file" className="hidden"/>
              </label>
              </button>
         
            </div>
          </div>
        </div>

        
       
        <div className="graphs_sec mb-10 flex flex-wrap mt-10 w-11/12 mx-auto">

        <div class="flex flex-wrap -m-4 text-center w-full mb-2">
      
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faEnvelope} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">1.3K</h2>
          <p class="leading-relaxed">Total Reviews</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faFaceSmile} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">1.3K</h2>
          <p class="leading-relaxed">Positive</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faFaceSadCry} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">1.3K</h2>
          <p class="leading-relaxed">Negative</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faFaceMeh} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">1.3K</h2>
          <p class="leading-relaxed">Neutral</p>
        </div>
      </div>
    </div>
          <div className="w-full md:w-5/12">
            <Example />
          </div>
          <div className="w-full md:ml-5 md:w-6/12">
            <BarChart />
          </div>
          
          {/* <div className="mt-5 md:mt-0 md:ml-5 flex justify-between flex-col w-full md:w-1/2">
            <Card className="bg-[#323262] text-cyan-50">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-cyan-50"
                >
                  Units
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
            <Card className="mt-5 md:mt-0 bg-[#323262] text-cyan-50" >
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-cyan-50"
                >
                  Units
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div> */}
        </div>
        <div className="mb-5">
          <DefaultTable />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Dashboard;
