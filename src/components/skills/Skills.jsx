import React from 'react';
import javascriptLogo from '../../assets/images/javascript.png';
import pythonLogo from '../../assets/images/python.png';
import javaLogo from '../../assets/images/java.webp';
import csharpLogo from '../../assets/images/csharp.png';
import nextjsLogo from '../../assets/images/next.webp';
import adonisjsLogo from '../../assets/images/adonis.jpeg';
import mysqlLogo from '../../assets/images/mysql.png';
import sqlServerLogo from '../../assets/images/sqls.png';
import postgresLogo from '../../assets/images/pg.webp';
import angularjsLogo from '../../assets/images/angular.png';
import drawioLogo from '../../assets/images/draw.png';


function Skills() {
  const technologies = [
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'C#', logo: csharpLogo },
    { name: 'Next.JS', logo: nextjsLogo },
    { name: 'Adonis/JS', logo: adonisjsLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'SQLServer', logo: sqlServerLogo },
    { name: 'PostgreSQL', logo: postgresLogo },
    { name: 'AngularJS', logo: angularjsLogo },
    { name: 'Drqw.io', logo: drawioLogo },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Skills.</h2>
      <div className="row">
        {technologies.map((tech, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img src={tech.logo} alt={tech.name} className="card-img-top" />
              <div className="card-body">
                <p className="card-text text-center">{tech.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;


  