import React from "react";
import "./TravelList.css";
import Travel from "./Travel";

function TravelList() {
  const destinations = ["Azores", "Siberia", "Venice"];

  const travelsImg = [
    "https://imagesvt.abreu.pt/abreu/share/2019-03/2019-03-20103809_a000263c-69b3-42c4-84ef-a24a06e6335b$$ee3b4c99-4882-441a-a1c4-b7b8cfdc9e43$$774f7b91-93ae-4831-9e5a-ae6f53110023$$BlogImageHeader$$pt$$1.jpg",
    "https://image.businessinsider.com/5d409233100a247279644dd4?width=1900&format=jpeg&auto=webp",
    "https://st3.depositphotos.com/1005586/17378/i/1600/depositphotos_173783582-stock-photo-view-of-the-venice-canals.jpg"
  ];

  const countries = ["Portugal", "Russia", "Italy"];

  const distances = ["1000.00 KM", "5.000.00 KM", "2200.00 KM"];

  const travels = [
    {
      photo: travelsImg[0],
      destination: destinations[0],
      country: countries[0],
      distance: distances[0]
    },
    {
      photo: travelsImg[1],
      destination: destinations[1],
      country: countries[1],
      distance: distances[1]
    },
    {
      photo: travelsImg[2],
      destination: destinations[2],
      country: countries[2],
      distance: distances[2]
    }
  ];
  return (
    <div>
      <table>
        {travels.map(travel => (
          <tr>
            <td>
              <Travel
                destination={travel.destination}
                photo={travel.photo}
                country={travel.country}
                distance={travel.distance}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TravelList;
