import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const GT2NotFound = () => (
  <MDBContainer>
    <MDBRow>
      <div className="col-12">
        <section className="my-5 text-center">
          <h1 className="display-1">404</h1>
          <h4 className="mb-4">Stránka nenalezena</h4>
          <p className="mb-4">
            Stránka, kterou hledáte neexistuje nebo se vyskytla neočekávaná chyba.
          </p>
          <Link to="/">
            <MDBBtn>Návrat na domovskou stránku</MDBBtn>
          </Link>
        </section>
      </div>
    </MDBRow>
  </MDBContainer>
);

export default GT2NotFound;
