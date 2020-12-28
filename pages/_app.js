import '../public/static/css/styles.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ zIndex: 1000 }}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img id="logo" src="/logo.png" alt="HOWTOTECH" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain"
            aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <div className="container">
              <ul className="navbar-nav mr-auto mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/posts?category=hardware">Hardware</a>
                </li>
                {/* {{#if user}}
                    <li className="nav-item">
                        <a className="nav-link" href="/admin">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/logout">Logout</a>
                    </li>
                    {{/if}} */}
              </ul>
            </div>
          </div>
        </div>
      </nav>


      <Component {...pageProps} />



      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dictum nulla sit
              amet interdum. Integer lorem nunc, porttitor sed laoreet a, faucibus sed lacus. Nunc et est id felis tristique
              lacinia nec quis diam. Mauris lobortis magna quis pharetra vehicula. Mauris porttitor non massa sit amet
              sodales. Etiam libero lacus, auctor nec est ac, faucibus cursus est. Suspendisse vel finibus nisi. In nec
              tincidunt enim. Quisque sed ex sit amet lorem pharetra euismod. Morbi sit amet massa ante. Curabitur egestas
          pellentesque nisi nec sagittis.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="#">Sample_Category1</a></li>
                <li><a href="#">Sample_Category2</a></li>
                <li><a href="#">Sample_Category3</a></li>
                <li><a href="#">Sample_Category4</a></li>
                <li><a href="#">Sample_Category5</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#/">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
          <a href="#">howtotech</a>.
        </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"></script>
      <script
        src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=5c5dggjgn41gslpp0ozsgeklrxj7tmy99h3tfvzffuvxv868"></script>
    </>
  );
}