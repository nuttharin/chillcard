import React  from 'react';
import "../css/transection.css";
import { ReactComponent as Logo } from "../img/Logo.svg";
import { ReactComponent as Logo2 } from "../img/logo3.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button } from "@material-ui/core";
import axios from "axios";
// import { useHistory } from "react-router-dom";


export default function transection1(props) {



       
  return (
    <div className="transectionBg">
      {/* <Logo className="LogoChill" /> */}
      <Logo2 className="LogoChill" />
      <br />
      <br />
      <text  className="TextInvite">ใบบันทึกรายงาน</text>
      <text class="TextInvite2">Transection Record</text>
      <br />
      <br />
      {/* <text className="TextLaunchEvent">{new Date().toDateString()}</text>
      <br />
      <text className="TextChillAll">CHILL ALL</text>
      <br />
      <br />
      <text className="TextDate">10 ตุลาคม 2563 : 13.00 - 16.00 </text>
      <br />
      <br />
      <text className="TextPlace">สถานที่</text>
      <br />
      <br />
      <text className="TextPlaceName">โรงเเรมเวสต์เกต เรสซิเดนซ์ (WR)</text>
      <br />
      <br />
      <text className="TextAndress">
        8/8 ตำบลบางม่วง อำเภอบางใหญ่ จังหวัดนนทบุรี 11140{" "}
      </text>
      <br />
      <br /> */}
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>   
        
        <img className = "QRCodeStyle" src={"https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http://202.44.235.51/QRcode/index.php?user="+props.match.params.id+"&choe=UTF-8"} ></img>
        <text className="TextGift"> **นำใบบันทึกรายการไปรับเงินที่ผู้ให้บริการ**</text>

       
    </div>
  );
}
