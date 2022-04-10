import React, { useState, useEffect } from "react";
import "./Imsakiye.scss";
import { withParamsAndNavigate } from "../util/Navigate";
import axios from "axios";
import ImsakTime from "./ImsakTime";
import MySelect from "./MySelect";
import cities from "../util/city_list";
import moment from "moment";

function Imsakiye() {
  const [districts, setDistricts] = useState([]);
  const [prayTimes, setPrayTimes] = useState("");
  const [remainingTime, setRemainingTime] = useState("☀︎");
  const [wallpaper, setWallpaper] = useState("");

  const calculateIftarTime = (aksam, imsak) => {
    let hour = aksam.split(":")[0];
    let minutes = aksam.split(":")[1];
    let now = new Date();
    let iftar = new Date();
    let sahur = new Date();

    let sahurHour = imsak.split(":")[0];
    let sahurMinutes = imsak.split(":")[1];

    iftar.setHours(hour);
    iftar.setMinutes(minutes);
    sahur.setDate(sahur.getDate() + 1);
    sahur.setHours(sahurHour);
    sahur.setMinutes(sahurMinutes);

    let remainingTime = moment.duration(moment(iftar).diff(now))._data;
    // console.log("remaining", remainingTime);
    let sahurRemainingTime = moment.duration(moment(sahur).diff(now))._data;
/**


 * ---------------------------
 *
 *  iftar saat - içermiyorsa -> iftar saatine kalan zamanı gösteriyoruz
 *  iftar saati - içeriyosa -> sahura kalan zamanı gösteriyoruz
 *  
 *  iftar saati de - içermiyor sahur saati de - içermiyor -> sahur saatini
 * 
 * if iftar - içeriyor set sahur
 * else if iftar - içermiyor && sahurda içermiyor set sahura
 * 
 * else set iftar
 *  saat 6 imsak - iftar + 
 * --------------------------

 */
console.log("iftar " , remainingTime);
console.log("sahur " , sahurRemainingTime);
    if (
      remainingTime.hours.toString().includes("-") ||
      remainingTime.minutes.toString().includes("-")
    ) {
      setRemainingTime(
        "İmsak vaktine kalan süre <b> " +
        sahurRemainingTime.hours +
        " </b> saat <b>" +
        sahurRemainingTime.minutes +
        " </b> dakika"
      );
    } 
    else if (
      (!remainingTime.hours.toString().includes("-") ||
      !remainingTime.minutes.toString().includes("-") && !sahurRemainingTime.hours.toString().includes("-") ||
      !sahurRemainingTime.minutes.toString().includes("-")) && (sahurRemainingTime.hours<remainingTime.hours)
    ){
     
      setRemainingTime(
        "İmsak vaktine kalan süre <b> " +
        sahurRemainingTime.hours +
        " </b> saat <b>" +
        sahurRemainingTime.minutes +
        " </b> dakika"
      );
    }
    else {
      setRemainingTime(
          "İftar vaktine kalan süre <b> " +
          remainingTime.hours +
          " </b> saat <b>" +
          remainingTime.minutes +
          " </b> dakika"
        );
    }
  };

  const getWallpaper = () => {
    axios
      .get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization: `563492ad6f917000010000016e78dcefe4424433a945c38427567d4a`,
        },
        params: {
          query: "mosque",
          per_page: 1,
          page: Math.floor(Math.random() * 500),
        },
      })
      .then((response) => {
        console.log(response.data.photos[0].src);
        setWallpaper(response.data.photos[0].src.landscape);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTime = (districtId) => {
    axios
      .get(`https://ezanvakti.herokuapp.com/vakitler/${districtId}`)
      .then((response) => {
        console.log("response", response.data);
        let times = response.data[0];
        let imsakTimes = response.data[1];

        calculateIftarTime(times.Aksam, imsakTimes.Imsak);

        setPrayTimes({
          imsak: times.Imsak,
          gunes: times.Gunes,
          ogle: times.Ogle,
          ikindi: times.Ikindi,
          aksam: times.Aksam,
          yatsi: times.Yatsi,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDistrict = (cityId) => {
    let newList = [];
    axios
      .get(`https://ezanvakti.herokuapp.com/ilceler/${cityId}`)
      .then((response) => {
        console.log("response", response.data);
        newList = response.data.map((item) => {
          return {
            id: item.IlceID,
            name: item.IlceAdi,
          };
        });
        setDistricts(newList);

        console.log("--", newList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const selectedCity = (cityId) => {
    console.log("kontrol", cityId);
    getDistrict(cityId);
  };

  const selectedDistrict = (districtId) => {
    console.log("kontrol", districtId);
    getTime(districtId);
  };

  useEffect(() => {
    getWallpaper();
    getDistrict(539);
    getTime(9541);
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="container">
        <h1 className="title">İMSAKİYE</h1>
        <div className="remaining-time"><span dangerouslySetInnerHTML={{ __html: remainingTime}} /></div>
        <MySelect
          default={{
            id: "539",
            name: "İstanbul",
          }}
          data={cities.map((item) => {
            return {
              id: item.SehirID,
              name: item.SehirAdi,
            };
          })}
          onChange={selectedCity}
          placeHolder={"şehirler"}
        />

        <MySelect
          default={{
            id: "9541",
            name: "İstanbul",
          }}
          data={districts}
          onChange={selectedDistrict}
          placeHolder={"ilçeler"}
        />

        <ImsakTime
          imsak={prayTimes.imsak}
          gunes={prayTimes.gunes}
          ogle={prayTimes.ogle}
          ikindi={prayTimes.ikindi}
          aksam={prayTimes.aksam}
          yatsi={prayTimes.yatsi}
        />
      </div>
    </div>
  );
}

export default withParamsAndNavigate(Imsakiye);

    



