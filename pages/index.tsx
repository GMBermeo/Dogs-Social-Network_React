import type { NextPage } from "next";
// import { BrowserRouter } from 'react-router-dom'
// import { About } from "../components/sections/About";
// import { Hero } from "../components/sections/Hero";
// import { NavBar } from "../components/NavBar/NavBar";
// import { Experience } from "../components/sections/Experience";
// import { Education } from "../components/sections/Education";
// import { Portfolio } from "../components/sections/Portfolio";
// import { Skills } from "../components/sections/Skills";

const Home: NextPage = () => {
  return (
    <>
      {/* <NavBar />

      <Hero /> */}
      <main className="mx-auto">
        <div>Next.js</div>
        <div className="App">
          {/* <BrowserRouter>
        <UserStorage>
          <ModalStorage> */}
          {/* <Header /> */}
          <main className="AppBody">
            indextsx
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <Route path="photo/:id" element={<Photo />} />
                <Route path="profile/:user" element={<UserProfile />} />
                <Route
                  path="myAccount/*"
                  element={
                    <PrivateRoute>
                      <User />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes> */}
          </main>
          {/* <Footer /> */}
          {/* </ModalStorage>
        </UserStorage>
      </BrowserRouter> */}
        </div>
        {/* <About />
        <Experience />
        <Portfolio />
        <Education />
        <Skills /> */}
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
