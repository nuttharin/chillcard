import React  from 'react';
import "../css/chillcard.css";
import { ReactComponent as Logo } from "../img/Logo.svg";
import "fontsource-roboto";
import { Button } from "@material-ui/core";
import axios from "axios";
// import { useHistory } from "react-router-dom";


export default function chillcardByid(props) {
// const history = useHistory();

     //console.log(props.match.params.id);
      var url = "5" ;
      var url1 = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=";
      var url2 = "&choe=UTF-8"
    //   async function xx(){
    //         await fetch("http://202.44.235.51:200/get/dataInvitationByID?id="+props.match.params.id)
    //         .then(res => res.json())
    //         .then(
    //         (result) => {
    //             console.log(result) ;
    //             url = await url1+ result.data[0].url + url2 ;
    //             console.log(url) ;
    //             return url ;
        
            
        
    //         },
    //         (error) => {
    //             this.setState({
    //             isLoaded: true,
    //             error
    //             });
    //         }
    //         )
    //   }
    
   



       
  return (
    <div className="backgroundimg">
      <Logo className="LogoChill" />
      <br />
      <br />
      <text  className="TextInvite">ขอเชิญเข้าสู่</text>
      <br />
      <br />
      <text className="TextLaunchEvent">งานเปิดตัว</text>
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
      <br />
      <text className=" TextGift"> *งดรับของขวัญ ขอบคุณในไมตรีจิต*</text>
      <br />
      <br />
      <Button
        style={{
          backgroundColor: "#F1F1F1",
          height: 55,
          width: 258,
          marginTop: 33,
          marginLeft: 60,
          borderRadius : 16
        }}
        // onClick = {()=>history.push("/chillmap")}
      >
                <a href="/chillmap">ดูเเผนที่</a>

      </Button>
      <br />
      <br />
        <getUrl/>
        <img className = "QRCodeStyle" src={"https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http://202.44.235.51:200/get/dataInvitationByID?id="+props.match.params.id+"&choe=UTF-8"} ></img>
      
       
    </div>
  );
}
