import React from 'react';
import PropTypes from 'prop-types';
import { TiTick } from 'react-icons/ti';
import { TfiClose } from 'react-icons/tfi';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

// Stylesheet

import './Details.css';

const Details = ({ character }) => {
  const {
    name, image, yearOfBirth, dateOfBirth, actor,
    gender, species, house, ancestry, eyeColour,
    hairColour, patronus, hogwartsStudent, hogwartsStaff,
  } = character;

  return (
    <>
      <div className="details-container">
        <div className="card-container">
          <h2 className="charc-name">{name}</h2>
          <div>
            <img className="actor-image" src={image} alt={name} />
          </div>
          <div className="detail-section">
            <div className="info">
              <>
                <table className="all-details">
                  <thead />
                  <tbody>
                    <tr className="list">
                      <td className="info-type">Actor</td>
                      <td className="info-detail">{actor}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Gender</td>
                      <td className="info-detail">{(gender === 'male') ? <BsGenderMale className="gender" /> : <BsGenderFemale className="fe-gender" />}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Species</td>
                      <td className="info-detail">{species}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Year of Birth</td>
                      <td className="info-details">{(yearOfBirth !== null) ? `${yearOfBirth}` : 'xxxx' }</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Date of Birth</td>
                      <td className="info-detail">{(dateOfBirth !== '') ? `${dateOfBirth}` : 'xx-xx-xx' }</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">House</td>
                      <td style={(house === 'Gryffindor') ? { color: 'rgb(245, 188, 48)', background: 'rgb(127, 8, 9)' } : { color: 'rgb(28, 92, 53)', background: 'rgb(168, 171, 170)' }} className="info-detail">{(house !== '') ? `${house}` : 'none' }</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Ancestry</td>
                      <td className="info-detail">{(ancestry !== '') ? `${ancestry}` : 'none' }</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Eye colour</td>
                      <td style={{ color: `${eyeColour}` }} className="info-detail">{(eyeColour !== '') ? `${eyeColour}` : 'black' }</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Hair colour</td>
                      <td style={{ color: `${hairColour}` }} className="info-detail">{hairColour}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Patronus</td>
                      <td className="info-detail">{(patronus !== '') ? `${patronus}` : 'none' }</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Hogwarts Student</td>
                      <td className="info-detail">{(hogwartsStudent === true) ? <TiTick className="tick" /> : <TfiClose className="close" />}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Hogwarts Staff</td>
                      <td className="info-detail">{(hogwartsStaff === true) ? <TiTick className="tick" /> : <TfiClose className="close" />}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  character: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Details;
