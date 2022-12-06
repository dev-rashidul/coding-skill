import React, { useContext, useRef } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { AuthContext } from "../../../Context/Context";
import './Checkout.css';


const Checkout = () => {

  // Load data from loader and destuructre
  const selectedCourse = useLoaderData();
  const { name, price, image } = selectedCourse;

  // Get User
  const {user} = useContext(AuthContext)

  // PDF Downloader
  const pdfDownload = useRef();
  const handlePrint = useReactToPrint({
    content : () => pdfDownload.current,
    documentTitle : "Checkout Page",
  })

  return (
    <Container>
      <div ref={pdfDownload} className="checkout-course text-center my-5">
        <h3>
          <span>Thanks, <bold className="text-primary">{user?.displayName}</bold> for Purchasing This Course : </span> <br /> {name}
        </h3>
        <Image className="img-fluid" src={image}></Image>
        <p>Your Course Price is : <span>${price}</span></p>
        <Button variant="warning" className="text-white mb-4" onClick={handlePrint}> <FaCloudDownloadAlt className="mb-1"></FaCloudDownloadAlt> Download PDF</Button>
      </div>
    </Container>
  );
};

export default Checkout;
