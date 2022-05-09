import React from "react";

const Blogs = () => {
  return (
    <section className="container about w-75 mx-auto min-vh-100 my-5">
      <h2 className="mx-auto my-5 text-center">Q & A</h2>
      <h3>Difference between javascript and nodejs?</h3>
      <p className="fs-5">
        Javascript is a scripting language that can be executed in the Client's
        browser whereas NodeJs is a server side framework needed to run the
        javascript code in the backend server without any browser requirements.
      </p>
      <h3>When should you use nodejs and when should you use mongodb?</h3>
      <p className="fs-5">
        If we want to use Javascript on the server side, we have to install the
        NodeJs as a framework to run the javascript code Mongodb is used for
        storing unstructured data where the database schema is dynamic and not
        predefined.
      </p>
      <h3>Difference between sql and nosql databases?</h3>
      <p className="fs-5">
        sql has predefined fixed schema whereas nosql has dynamic schema. sql
        database supports vertical scaling whereas nosql database supports
        horizontal scaling.
      </p>
      <h3>What is the purpose of jwt and how does it work?</h3>
      <p className="fs-5">
        JSON Web Token (JWT) is an open standard (RFC 7519) that is used to
        trasmit information as JSON object between client-ser er pairs. it has
        three layers i.e. header, payload and signature. The information can be
        verified and trusted with the help of the added signature.
      </p>
    </section>
  );
};

export default Blogs;
