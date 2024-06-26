import "./App.css";
import Content from "./pages/Content";
import Header from "./pages/Header";

import Nav from "./pages/Nav";
export default function App() {
  return (
    <div>
      <>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card">
                  <div className="card-body p-5">
                    <Header></Header>
                    <Nav></Nav>
                    <Content></Content>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
