import { Link } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";

const LeftSidebar = () => {
  const { logo } = useLogo();
  return (
    <div className="sidebar-left d-none-mobile">
      <div className="logo-box">
        <div className="logo">
          <Link
            to="/"
            aria-current="page"
            className="router-link-exact-active router-link-active"
          >
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
        </div>
      </div>

      <div className="special-menu">
        <h5 className="text-yellow pl-2">
          <u>Racing Sports</u>
        </h5>
        <ul className="navbar-nav">
          <li className="nav-item dropdown dropright">
            <a data-toggle="dropdown" className="dropdown-toggle sport10">
              <i className="d-icon icon-10" />
              <span className="sport-name">Horse Racing</span>
            </a>
            <div className="dropdown-menu">
              <h5>All Horse Racing</h5>
              <div className="horse-list-box">
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/a3xrquXK8477zU7R8TzcpA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:13</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/RxeE2vTYqi1yiv77lD6DJA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:39</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/NJK%2FdIS+b1s4GKLbGxAy7g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:52</span>
                    <span className="ml-1">Port Pirie (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/9wros8Sso1QiNqxuDtjrKw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:00</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/g2qAJOqPYYShYYcsQSMoHA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:10</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/4XK1TpcGyPNl9SpASbuRiA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:17</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/dFgehWP2wWfx7QNODPpN3Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:24</span>
                    <span className="ml-1">Port Pirie (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/QkZmU3vp65nvo6YGRnToAA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:34</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/YJzgHWBPN6RGfjCupuxhhg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:44</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/FzcfECLJz%2F2nzQp5cwPRIw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:51</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/XCjbtbiF3RgUa%2FltE0hUJw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:58</span>
                    <span className="ml-1">Port Pirie (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/BU67ev1W1+YIdRh2V05UEg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:08</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/1TS+2g7fByohbnEFtR74Jw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:18</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/5pe%2FgjrKjwPEGe+dfI0lrw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:25</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/T06%2F6vYXu7IUaFfUQwCHUQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:30</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/u0v6tjZSogFumR78VZcX4A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:32</span>
                    <span className="ml-1">Port Pirie (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/2PsFrWMpN1iYqPGy3kxehw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:42</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/EHRvhceXoywxtmYjAEJ09w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:52</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/v73Wz13TtZY0yroAG%2F5bUw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:59</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/ejEvBlGiEnQCQuHtJYu0mw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:05</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/k42cJVYBks3Z6Chj%2FZGzyg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:06</span>
                    <span className="ml-1">Port Pirie (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/DTg79RytpBzedVRRsAnmng=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:16</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/pVi0SkoT8+6+N+%2FsZ677Zg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:26</span>
                    <span className="ml-1">Wagga (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/1qj8Txw5oiklPBAMP0bzKQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:33</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/yFZeLaVGi1F63nXw+IIQvQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:40</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/OXXF1pkoEd4iFgWQPb5jyg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:50</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/J1Lgxi30eRmA8kw0azfFxw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:55</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/%2F+qoAH%2F7INqt15p3GfUwRw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:00</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/VL6Zw4hfHHJKTAioMkPy1g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:15</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/zWOWoZj903n56a767OC+5g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:20</span>
                    <span className="ml-1">Shepparton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/PPkWNnh79O2+Jfc9nEvWmw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:30</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/Qz67iGOi+FhZ39mPVXMg9w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:34</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/djAfCVzbmH60OIZx5VSPmQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:50</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/ygWv2rNofruW5iaxzSBiow=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:04</span>
                    <span className="ml-1">Gloucester Park (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/32Rk5bV9rpEttb0RiOW3LQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:05</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/jaHqKrlW2IY%2FoanOQefNZw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:10</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/UjDSndj3PweQlBWDShkn8A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:20</span>
                    <span className="ml-1">Nottingham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/vWhgGzstWF9KGa6XJNBFPQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:25</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/K1GKrrJyQgf2z%2FDR3o8OSw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:30</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/ydSuJuuNpnQ7diu4tEPCUQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:40</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/0vSqTWYb%2Fu+46p5gMyJW9A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:40</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/V43hvsgcpiCLtffjTWCYww=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:50</span>
                    <span className="ml-1">Nottingham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/stVi1DItSKobEM8utwgw+Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:00</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/onjw4SufvuAVi94EIIGebw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:05</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/G3tbXNxu0jZ35vD5FOJ7Ng=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:10</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/MlrabYCEb7+ZCPCTyCAC4A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:15</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/Wn+VD4tZnCB9mKMHfSw47Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:20</span>
                    <span className="ml-1">Nottingham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/7B1uFpQ5pURxF9i28+s6fg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:30</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/uT4MSQhCofnjvyEGw+8+ww=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:40</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/GTt6wCchHxS7bANlENU+vg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:40</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/CDJQCilIjR62XGeUB7q41w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:50</span>
                    <span className="ml-1">Nottingham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/44hbkY52yUnC2HqB72cwxg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:50</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/qwzaaMaH3+1W9Y2a2Cmzyg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:00</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/Uon%2F8dQfYlXwfKKG+ccXTQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:10</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/fujZ687sGfR6+Mbh5SI5UQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:15</span>
                    <span className="ml-1">Kenilworth (ZA)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/FdccsDdyWYw5aJigWg7I2A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:20</span>
                    <span className="ml-1">Nottingham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/H8V3sAZNQc58jIaBRZ+fbw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:25</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/4JxC9Q9uuoT3PPUKzoFClA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:35</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/NZeX8hjmyD5b93Nq%2FSnoWw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:40</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/GVBi43l4f0aL+hd6KJPP7Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:45</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/P%2FKy%2F5Ryo02kpMkp1H%2F0rQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:55</span>
                    <span className="ml-1">Nottingham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/mKII%2FU9IgwkOgozuqAMApg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:00</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/iE%2F3di6r1y3ZSqXx7RvpQw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:05</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/fEpAffhnRtHyNztNPE6Btw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:12</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/YmWJLphJ2UqHxUNa1%2FdsPQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:20</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/NeYdI9if6Ee+U6RjsJ2BSA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:35</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/7HBM5DiQcAR9aQ714oG%2FUg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:37</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/YwZnnSyL%2Fh0zV9BaU6qwjQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:42</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/qfr1+0R37O2x62YiLMq7AQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:50</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/deDdyGx4jRZuwuOQCFLn%2FQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:55</span>
                    <span className="ml-1">Lingfield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/ZR6gmRSz8BN1q9FNIVjbOQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:00</span>
                    <span className="ml-1">Huntingdon (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/%2Fbwwe45%2FG+Kol+XtEwgXMA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:11</span>
                    <span className="ml-1">Chantilly (FR)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/hHU10e6vT3fDmBufENtqtQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:12</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/xeMEMrpLvK%2FUF8AeVY6f7Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:20</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/e5ezX0OOJxNQ9LQnFTtUVw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:30</span>
                    <span className="ml-1">Huntingdon (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/3LiqieKGPsfqs9j4MJq1Vw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:42</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/5JXYhgnOb5HNPyFssobYZA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:50</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/ILMI+jG8Tb4xDDOTGbS0dw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:00</span>
                    <span className="ml-1">Huntingdon (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/u5uHMyXhyR+N+MuGZWByuQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:12</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/IVLxEiJ8npgBCK2aXH3Ulg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:20</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/VAq3kbKUiyZGD7%2Fek1a+Fg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:30</span>
                    <span className="ml-1">Huntingdon (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/4EaHPPpi1pE4+h9iyrNHoQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:50</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/lsz+mHGZrNe46cJO6uCsfQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:30</span>
                    <span className="ml-1">Huntingdon (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/fsOP+zMeZZKV0xiUldbhrQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:42</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/mijNWP03E7y7K2siCnns8w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:50</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/VwqTp5GBynXWKNia7xkQfA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:00</span>
                    <span className="ml-1">Huntingdon (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/T4+2Ny91ZE5zTUaDhNYPuQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:12</span>
                    <span className="ml-1">Cork (IE)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/a5FVGBEunEp9xHJrLilzVA==/a6gml44pNG4SL6dp21LXTw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:20</span>
                    <span className="ml-1">Hexham (GB)</span>
                  </p>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown dropright">
            <a data-toggle="dropdown" className="dropdown-toggle sport65">
              <i className="d-icon icon-65" />
              <span className="sport-name">Greyhound Racing</span>
            </a>
            <div className="dropdown-menu">
              <h5>All Greyhound Racing</h5>
              <div className="horse-list-box">
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Dfw0J+D%2F5RUGiTSCFNcC5w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:41</span>
                    <span className="ml-1">Grafton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/b1HD7SLFaJ5jEqqBNRGvPg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:44</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/R4Kg0wqgYWheQRcjkggCIg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:47</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/aPgOO0bBnmaXbVzGgEek4g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:50</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/TPH1y7CqBAHm5UPsdQW8FA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:53</span>
                    <span className="ml-1">Q1 Lakeside (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/bDA4w9GRW8%2FYR8fAcr8F+A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>14:57</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/kx4PhZlV2vKEbsdGbUAgMQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:02</span>
                    <span className="ml-1">Grafton (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/odYTCu0tljW%2FFFZmUU0%2FZA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:05</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/9L95691EGnCsZq%2FA4gXTfA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:08</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/6zr2fH3ZB8Lm5GjPJu7BIA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:11</span>
                    <span className="ml-1">Q1 Lakeside (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/xHcblfLtfYSrK2mEJsRrpg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:15</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/xI0WJwFdcSa7zw5zsYELsg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:22</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/cpe8gQj7j1eLTxdR0Lq%2F+g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:29</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/dHcKuzVOkMUuJe99f3Qd4g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:32</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/wA5d8BSSoms4kcWyMLKvvA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:39</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/tEmn9dr7+NlZVjNbqGMfDQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:42</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2FC8zVYU8vSvVL3bj7feuKA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:49</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/CBctdFZZ8WA4ht9RIMhp0g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>15:56</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/zGdvMV3sDbGIYGhOF005iQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:01</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/DP0BSIjuGNLFR2fej3hD6Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:03</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/sp27B8VgF00lxI8N31rNiw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:06</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Z+lq3lSk2zg5uhDTPqHWQg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:09</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/IePxsqF8lriYSLCe6r2mPg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:10</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/hIy1Sei+NNm1wOwxkSTSwA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:13</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/BypVTKa2A1rmnvXso%2Fe9pQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:16</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/fksqqK%2FnPlPSaEJvODn1oQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:18</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/7HOKhYwETtTgDi2YGanWpQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:23</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/rbrVrPLwxAA2zGck8W4KJQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:27</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/lqJatBUqW8OPVgP2n2FizA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:28</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/6dj0UWEtdKuCJCNQBhvIfQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:30</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/dZZhe390lvrT27wWoNE0Cw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:34</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/bnv07feijJjTPp2nO2ZNZw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:37</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/4dKDGJth9%2FsU9IJvclnHEQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:40</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/xP9SqbLfRzTWX5u7WsB24g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:43</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/EKnaaPEuwnlPHq0pZo+o4A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:43</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Ehu%2F01xvFHRabcwfGX4G8A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:47</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/9+8M+ixnP7y3P+9mF+wV+w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:50</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/PW7YXdbVu9v94YzBfhN9Vg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:52</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/RTOI7Y4UI8RVD1HuxcnVYw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>16:57</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/wPzeABPdLXcdMTeDf58CJg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:01</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/aYLS83GwvIrSsfaQi0CQGg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:01</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/kg2khN3msO22MjCN+Av+LA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:04</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/dkvoI0aU6KazF8oPLPCADw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:09</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/7hs0RALG+METCAT%2FSs3b5w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:11</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/EfrlEz2DS7ljz3sWemd5WQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:14</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/DrrwnOnRZCBHs3YCpE9tXA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:18</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/G%2FTHf0QPf+NnstGO%2FI295w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:21</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/w6n5Dy%2FKm6Nw4OAAnI6Iaw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:24</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2Fjg2uAiizewilel2h0vSVQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:25</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/OHiKEV6sjkrxAGY69fnTjQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:26</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/+CGMdqv%2FH%2FBEVaGO96SPmw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:31</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/yrZT3MtqkA9ioYklYZ7Gtw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:34</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/NF9yIOtP%2Fop4OI9aXszmog=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:38</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/yIgnKQw16GwwWi75Vq+HDA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:41</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/gB4C8PFXSgj3fzpZJnN3XA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:42</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Nj8DibYBoskTaBE9Vo%2Fx+Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:44</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/gYHqaSlCOiTSlxq6COOuoQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:47</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/C1JmpPOv29BVoh+zm8Sg9g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:51</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2FqOp9t02Uc3LtMKdiIN1kg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:55</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/NGxqPPr4KRFcjP3pDfOKfw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:58</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/aq83B0YB6omXNpFtIJn2Ng=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>17:59</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/fxTdYN8aFtWF8aHC%2FeH5qw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:05</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/k0SnziLNTPULFS3Ro%2FbdAA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:08</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2FPc8CW5+M9B+XOaViKh+JQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:08</span>
                    <span className="ml-1">Bulli (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/LiqeiIxbjl2N+TL7dp0LqA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:11</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/VWGCJkBDlZXRmTsizVhtKg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:14</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Ywd7RQDBvRel9gIgja6gQw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:17</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/sSy46RDAzoznuNUd2X8pFg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:17</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/ko4HP2WBQ2yjp75vJpksyQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:25</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/naBl3RZAodZMLroQXZ29hg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:26</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/7knjgSfGWA%2FmFH5NPNkYhA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:28</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/xs9kBW4Z1CDG38TBXwmnCQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:31</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/dhslvvOValHFRw9NRZnLXQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:33</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Ae7y09HkpDcBK8zU89pjLg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:39</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/t4PmHROW2buMMNREU9zkLA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:42</span>
                    <span className="ml-1">Warragul (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Wc6NZFd34LcxefBVgyMmXg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:42</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/U7OrrHbkJtxcMLLfWES5AQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:45</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/+kOtswJuUTTrC6cwVfcWrw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:48</span>
                    <span className="ml-1">Townsville (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/6Tl2ne5yR4g2OEWz%2FZKevA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:51</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/H0JR6TTs4rCilVajNQFeNA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:56</span>
                    <span className="ml-1">Gosford (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/nbieLmVNTScozbCorrqpEA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>18:59</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/xuM80YuxyfY0048nMVFq5g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:02</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/lOjX7Yr%2F8ZL83+11GP8jIg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:07</span>
                    <span className="ml-1">Sheffield (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/5j5ginnJ9NtSgvKzP5mRWw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:14</span>
                    <span className="ml-1">Newcastle (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/+uJEn8F%2FR7NudKWSDmpNZA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:17</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/eI5RrbamWBSbIqm+JnqQJg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:23</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/KkBRB7ntXqWOlj1jzz%2FaSA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:26</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/1FrDbrg05ztsmr2bxjkCbw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:31</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/CF9wl4nMYWiYa4IBZ%2FuXAQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:36</span>
                    <span className="ml-1">Mandurah (AU)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/no1Gwxd6F92H7Z7hcUCZYg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:41</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/F6fhrwTtn%2F0Lxz72hjBkFA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:44</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/MA+9ZTQLnbScum%2F5l6GYBg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>19:49</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Yu2EBvjXT0o79FHLdAqkJg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:01</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/15vB3uFIfOrSE5zmLJtvjA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:03</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/TJiX%2FPOLAmoBnWrYPs0dKw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:09</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/tDIaZWUZ2hF4NWZhtzawcw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:19</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/OJL7zY+kFRqpZThPojcMlg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:22</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/O3CJLuEtx9PwwbXssxInYw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:27</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/bZVRjxtdv1uKSkNEiiD33g=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:38</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/pO1YZTHct580bYNwNfhrKg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:41</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/cifL2l4BAcx3%2FDlro8M%2FSQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:47</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/oJA%2FrLYeJ1tAfu84A4gSCA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:57</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/oSBexrhs3pDq28dULrGdMA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>20:59</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/ysN38pBdzameyXMSrEdBlg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:04</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/tqV%2F7zGDMrHJGVSdjqpG6A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:16</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/jvmArXv%2FaxzXCyBiQ7RBgw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:18</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/L4uKrMSCtOXahvAc2%2FmO3w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:24</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/2SUC3O3Y7EYNFhuopzKOvw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:34</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/1sE3B1FRNfXlfx7r%2FqtNrQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:37</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/3tS7GSeNtU6hUuV0BdYt%2Fg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:42</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/yAfcw7QBZ0dlLl2DFswavg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:53</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Ei5Nm7YzSWRLmNaoe4oK5w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>21:56</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/VpRqEnaIdpJfonO7lZN4zQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:01</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/6iqlr1iXYiVO0WTl+K+B7A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:12</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/SI6mYwTdTWroyXl1fJ2bhQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:14</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Fy7BItJI6uHQM7HwDAVybQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:19</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/c+WUBL1zOaFeLjP+tZw6gg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:29</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/2LIqt5lVRJHEsOzv+Yoydg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:31</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/wMk8pyHz9TSYB9SBGz3M4A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:37</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Dh0gEujsNsOZyX3Rc0Vnsg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:46</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/QfFudk+OG03FjRSVQfwO6w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:49</span>
                    <span className="ml-1">Romford (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2FuhxO6I98i6lJvPqPYpRkg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:57</span>
                    <span className="ml-1">Monmore (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Q3r0Jktu80+Eq%2F5sVRqnTA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>22:59</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/4cMIOpHDfZT2IhU6xkRI8w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:08</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/YT16aR%2FKOd31xQuh2oAZ3Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:11</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/qUQyYnYTLW7F+SDi03ckIw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:14</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/RM0U1lWNf%2Fds+NQa+N2DIg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:16</span>
                    <span className="ml-1">Valley (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Up2GCAuBpdRJOJjY7oN3iw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:26</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/lIyGmMV0nRG7sU9Pjt0y4Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:29</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2FrEUWqY%2FFCihGXgmCsIdQw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:31</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/AvVyy3h2+l%2FnPdXwISEBbQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:37</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/fuVboNgQ%2FEBuD7oc%2FdS3rw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:42</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/wtuYQGYBotVtgkaCcxXcCA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:46</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/nmuBP6GnJWPYlVIp7VqSlg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:48</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/+6aLN9uTRsawv57yS8qZ9w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:53</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/ZYYZjEhXuhpJiexx48XMsw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>23:59</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/DaHxRZ7RyZMczz+Yt4LM%2Fw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:04</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/Jn6YLwGvclBs1JFlDLpyEg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:06</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/kI6fmQsUSoiNvX3fd7aS4Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:11</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/8jI5jtI%2FSGWCNtaou9j0UQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:16</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/g0MRj7IX19pSXy8R9qyRJA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:22</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/NpcWvsrCm44z1Hp2n97nvA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:24</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/l%2FE336rIXR7lNVAfPLAX%2FA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:27</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/1hkU1l9SfxY3eik4yzngwA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:31</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/qX%2F8ikmwMT8%2F4CSeFjNN%2FQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:34</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/U7GsQRqF6cGmNHRUiOuHtQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:36</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/r3sd05FmlcDhKzTOBbhJqQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:41</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/sx5Rv5eS50IsBaC18+vHDg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:47</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/wTwuibI3ZO2dkS7OdJiPgA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:52</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/S0ylNCxBj4HF9M4SAVd6LA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:54</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/wZdDmOxBwCV4x4DF+sCw6w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:59</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/nuNgOgkRqcATlrf66Lbc2w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>02:04</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/KAxQBN82Vjfbyaf4nu4EQQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>02:11</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/RkpWFplCN8+Z1y3eHvq6zg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>02:16</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/9pGEz4qIi9BbJfZujlP2Ew=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>02:23</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/u4GWtv+6gyLY579+tkWwWA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>02:28</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/plKW6aAg8AQh6MgZhbph8w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>02:46</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/CdCdih3mOPeP%2FIlWr5I0cg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:33</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/kudfdNVA4i3MXnovT+QNCA=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:39</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/e3JW8T9qYz1Va7r897B1jw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:42</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/zRkRP1oSr%2FEbVNa4xRlwkw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:44</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/0PgoU2vwozzvh5+UEin5nQ=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:49</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/%2FTfe3oh7IPcCEuEGxeQ2Xw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:56</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/fCklcRNVxWcqf6g0UeY00w=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>00:58</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/7arflg4g%2FVbUaxyI5nOPJw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:01</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/sCwY7eFv%2F+U2d+r8dfsC2Q=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:07</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/fy%2FyS9oHIBchM1ON5uwplg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:13</span>
                    <span className="ml-1">Central Park (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/O5Njh60DaNWwF%2FXYw8F4xg=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:16</span>
                    <span className="ml-1">Star Pelaw (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/HrdlcQDvnaNdnNym5hUe1A=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:19</span>
                    <span className="ml-1">Sunderland (GB)</span>
                  </p>
                </a>
                <a
                  href="/sport/detail/Ky3Lwv5A1ABHmil6Q0cleg==/dNvgjmRYMTyoeigOUAn8Nw=="
                  className
                >
                  <p className="dropdown-item d-inline-block">
                    <span>01:24</span>
                    <span className="ml-1">Towcester (GB)</span>
                  </p>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="menu-box">
        <h5 className="text-yellow pl-2">
          <u>All Sports</u>
        </h5>
        <div className="sports-list-content">
          <div className="all-menu">
            <span mode="out-in">
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport40">
                    <i className="d-icon icon-40" />
                    <span className="sport-name ifTooltip">Politics</span>
                    <span>(1)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          Assembly Election 2026
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/B2Y8+fXp42FFgKg8GdCtVw==/PjmDVbEQXXFL3fkaff9ehw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Assembly Election 2026
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport4">
                    <i className="d-icon icon-4" />
                    <span className="sport-name ifTooltip">Cricket</span>
                    <span>(33)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          Dim Cricket League (1 over)
                        </span>
                        <span> (22)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/a8nLgENwJzvpXdh4DzzSDw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Delhi Capitals (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/H2+C+XxBCcDGGCdB5njouw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Delhi Capitals (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/W3iccoTQgkJYfJTNo%2FisOQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Gujarat Titans (e) - Rajasthan Royals (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/8NU5%2FqiNd2NjJm2I6+FZwA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kolkata Knight Riders (e) - Punjab Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/5BwDw+jiJRbtfeI90DqJMw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kolkata Knight Riders (e) - Sunrisers Hyderabad
                              (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/mO7jKuQcwYdruQINmekA4w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lucknow Super Giants (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/Hnn2dHB0ekF+IqP14Nn5OA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lucknow Super Giants (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/dr9IBeRiY9oGOlaNV0nUqQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lucknow Super Giants (e) - Gujarat Titans (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/qQUPB5fe%2FtfQ3kkLEZN3xg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mumbai Indians (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/cJp9a9BpnQT4Dq6XfwapnA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mumbai Indians (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/ZU%2FnRnNQVy28O85diJi4Dw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mumbai Indians (e) - Lucknow Super Giants (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/GonuCNzKJgL%2F+0eOmTu3wg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mumbai Indians (e) - Rajasthan Royals (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/ST%2FKnNw4vzwJq1u0PM07yQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mumbai Indians (e) - Sunrisers Hyderabad (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/Dpslc6BghEMnv3JXw4IaPA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Punjab Kings (e) - Gujarat Titans (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/fyI+WtSMI6MjwalFs0A%2FCA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Punjab Kings (e) - Gujarat Titans (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/BYLBMBygKy5mmcMsmKmUaw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Punjab Kings (e) - Sunrisers Hyderabad (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/KYbEEMSAkNoPJ2yI6Ixu6Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Royal Challengers Bengaluru (e) - Punjab Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/QDY+kJ63+tN8d+mybwhBbg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Royal Challengers Bengaluru (e) - Rajasthan Royals
                              (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/OrutGtPB5nRwAojd2aea1Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Royal Challengers Bengaluru (e) - Rajasthan Royals
                              (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/5stHDqNjEsxvX5Kp1X4M6w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sunrisers Hyderabad (e) - Chennai Super Kings (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/+IQq+OOYGLqvRWfPOhQHaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sunrisers Hyderabad (e) - Delhi Capitals (e)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/pSGOtsJ3D0tgJbVKhY3CbA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sunrisers Hyderabad (e) - Rajasthan Royals (e)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">Indian Premier League</span>
                        <span> (5)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/DYTXxH0ZjsIP6DMfL%2FpBCw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Indian Premier League
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/9lHBXgGrPUgl3GfC5q6c%2FA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Gujarat Titans v Chennai Super Kings
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/rl9Qic14FEkODGSuZrG9CQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kolkata Knight Riders v Mumbai Indians
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/pnhoHVHVVhlPMsjY2KFVrw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Rajasthan Royals v Lucknow Super Giants
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/U4RSZHEgZp6YaLpGKset9Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sunrisers Hyderabad v Royal Challengers Bengaluru
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          Womens International Twenty20 Matches
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/09U6sFQ5vZf3moL4Jj%2F7PQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              England W v New Zealand W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          Virtual Cricket League
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/lkcwZH2N33OZjIufLPTSjg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pakistan T10 v New Zealand T10
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/FNHY76lEuEzWSQrHW0bDnw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sri Lanka T10 v Pakistan T10
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">Test Matches</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/9aVkGQjHVHJg+1zVY4CKoA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bangladesh v Pakistan
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">T10 XI</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/UfIfZJkQde67d7xTyBCHUg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sydney Sixers XI v Adelaide Strikers XI
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">T5 XI</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/SeK7puKGhm+IDlF%2FzygDVg==/q9Hy8lEoI9yVmrztizqpzA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">JT XI v TKR XI</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport1">
                    <i className="d-icon icon-1" />
                    <span className="sport-name ifTooltip">Football</span>
                    <span>(83)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ISRAEL Leumit League</span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/6ybCGvNmKLmWiPXO3yEpzg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Akko v Hapoel Eran Hadera
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/X9r9MBrcuEC09H0LXmmmFg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Nof HaGalil v Ironi Modiin
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/kzBqPEMMrBS8dLjGThtUXA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Raanana v MS Kfar Kasem
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/QLunFVk7Ae4DQqrbwjfk2g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maccabi Kabilio Jaffa v Hapoel Afula
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SOUTH AMERICA Copa Sudamericana
                        </span>
                        <span> (5)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/gKKCQP3nVnjFVv6sOT+Qbg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              America de Cali S.A v Tigre
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/YJOzjcc3oZ9qznNp3%2F%2FK7Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Audax Italiano v Barracas Central
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/pd1QraSfYQ1ov8FenV2S0A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Deportivo Cuenca v Deportivo Recoleta
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/%2FG3dOMoEkjvpjXOnkZoPbg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sao Paulo v Millonarios
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/EPFUu1k8XNY+BZp+3ee3MA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Torque v Deportivo Riestra
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          UEFA CHAMPIONS LEAGUE - WINNER 2025/26
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/jBVXdu%2FnOc+YLMSBb+ni8Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              UEFA CHAMPIONS LEAGUE - WINNER 2025/26
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">CHINA Super League</span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/vmSc%2F9SfuPA3uOvovXnaRw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Chengdu Rongcheng v Shanghai Port FC
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/o6tjX6AELw05Wi8Qs9xUYw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Qingdao Youth Island v Beijing Guoan
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/PnsNXJkWT%2FNccEIYhgxkSA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Shenzhen Peng City v Dalian Yingbo
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/ee6aSlxKlJgpAMCMjH2Qlg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tianjin Jinmen Tiger FC v Henan Songshan Longmen
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SOUTH AMERICA Copa Libertadores
                        </span>
                        <span> (7)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/OvidfvGAJOA7%2FebnunGNaw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Always Ready v Mirassol
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/3wkR1zeQ2ZrttfrewmxP7A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Boca Juniors v Cruzeiro MG
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/AXrF74QfKXpfdzZ%2FkWN1GQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Coquimbo Unido v Tolima
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/DZa2GqT+xMYWDm9XMg0ijg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fluminense v Bolivar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/TSEuzolxqW1pgjv8lHlKnA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Independiente (Ecu) v Libertad
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/BwrCoUruZNJTvg2Vkshutg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Rosario Central v Universidad de Venezuela
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Ne0SYAa0OOP14vHY6JxUBQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Santa Fe v CA Platense
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ALGERIA Ligue 1</span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/+CJfH3ehxVJtM%2FQuZw4%2F1w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CS Constantine v USM Khenchela
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/dJ9nJYzD%2F0bvg4QQlf9BRA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              ES Ben Aknoun v ES Mostaganem
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Y8CAuLSfvnlFNyzu4C32dg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              MB Rouissat v Paradou
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/q+nLcKbQxXGqAE1Qvjc0pw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              USM Alger v Olympique Akbou
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">INDIA ISL</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/SQ3muT+zhm1ClRRzrmT%2FLA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Northeast United v Mohammedan SC
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">CHINA U20 League</span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/4agXvOqHTgHoTowL8ZAqYw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Shandong Taishan U20 - Shaanxi Union U20
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/zcMckz%2FY%2F+uNdbj8YtpwLQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Shanghai U20 - Beijing Guoan U20
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/%2FAZc7ZWS96N4%2F9KDLkTeJA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Shenzhen Peng City U20 - Henan U20
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ENGLAND Premier League
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/xCJtvETrr%2F5BlU5E3gWB8A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bournemouth v Man City
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/OTZzJ7ykwLnv0j3l5B14qQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Chelsea v Tottenham
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITALY SERIE B - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/oPsz0L3r8+p0wcTk4QLv5w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              AC Monza v Juve Stabia
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          PARAGUAY Division Intermedia
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/ENoWpmCHkPn1gvW%2FUaq1aA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Deportivo Capiata v Club F de la Mora
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/7HWv07wpJdbNSs8om+qalw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Independiente FBC v Deportivo Santani
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/r6+t8kHMvqN5ELo5lmMLTQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tacuary v Encarnacion
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          AUSTRALIA Australia Cup
                        </span>
                        <span> (8)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/tIuCy+z2Glo7MhxDBjNZNg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Brisbane Olympic - Queensland Lions
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Lz4Q5+N5qIOUW9VbZlHjOg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dianella White Eagles - Bayswater City SC
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/GA9Ra68sFFfKqxT2f18dEA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fulham United (AUS) - West Torrens Birkalla
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/6zIcDDn+anmnYRPtCZI48g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Logan Lightning - St George Willawong
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/sJYQs32X9OO2LjAzNGu33A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Morley Windmills - Olympic Kingsway Sports Club
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Oxw2BE33pVMKy0bArMGJYQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              North Star FC - Gold Coast United
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/IsSRCxl5+B8cvNBTb6gYBg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Perth Redstar - Curtin University
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/0ItDAZa0uELd2Ub7PQXPQQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Rochedale Rovers - Capalaba Bulldogs
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">BRAZIL Carioca C</span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/qEwGereYL4H1yUaDg53Tsw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barcelona EC - AE Independente
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/DrCSGJDlqaqbGdg1yJPgWg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mageense - Uniao Central
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/xeSTD4eYt+pg9eXsNnlhCQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tigres do Brasil - CAAC Brasil
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BELGIUM Jupiler Pro League
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/%2FtXJQqIjbLee9+EgktViWQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Charleroi v Oud-Heverlee Leuven
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/vOmXggQRRrFlaouGqrO+5A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Genk v Antwerp</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Z428ICmj6rxRQoAxyiHlcQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Westerlo v Standard
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LITHUANIA Lithuanian Cup
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/6OX87DuHdjJIcpfR2AOYeg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              BFA Vilnius v Garliava Kaunas
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/NtgBtWT6TEsZYgNtS9x0%2Fg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Klaipedos Fsm v FK Dainava Alytus
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/j6ohuxOY8vdZDiSy4%2F81SA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Riteriai v FK Kauno Zalgiris
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          AUSTRALIA Victoria Cup Women
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/6tcvBv7QMC3qDAieGzgkhg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Avondale FC W - Heidelberg United W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          FRANCE COUPE DE FRANCE - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Aub3JJgu8+EEybi8o7qjyA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Lens v Nice</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ARGENTINA Reserve League
                        </span>
                        <span> (5)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/oOSnvRKGS6akNVHaF4hrqQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CA Banfield (Res) v CA Aldosivi (Res)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/TlN0vPwIGqFV6TXrWEzPPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CA Col Santa Fe (Res) v Ferro Carril Oeste (Res)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/4wCx0pjUZK0IQ0FWWFlydQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CA Independiente (Res) v Estudi Rio Cuarto (Res)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/%2FRXG1cFbzMEqypZmVQmoyQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Quilmes (Res) v CA Lanus (Res)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/GjL7JZJ4HXZf2RBy2r7DMQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              San Lorenzo (Res) v Racing Club (Res)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">SWEDEN Allsvenskan</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/%2FC79E8%2FS5pmcYsRxUkgYVQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Orgryte v IFK Goteborg
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          UEFA CONFERENCE LEAGUE - WINNER 2025/26
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/aQwVimr8a+MFBpI0t0E93A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              UEFA CONFERENCE LEAGUE - WINNER 2025/26
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ETHIOPIA Premier League
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/2YCsWlwE4NiTjQPcCDhbhw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bahir Dar FC v Defence Force SC
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/ynqtcj2aGkKcPIAkaEv6iA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ethiopian Medhin v Welayta Dicha
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/FwB8RZdZnSk9ciuHquDspw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hadiah Hosanna FC v Ethiopia Nigd Bank
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">USA US OPEN CUP</span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/vSPTxVBANmTRhPPlAG%2FmFA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Orlando City v Atlanta Utd
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/3b4oKUQ4LSiy19sfk4EypQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              St Louis City SC v Houston Dynamo
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ISRAEL Ligat haAl</span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/nEK60ZYJq8kvhN0rYpG%2FlA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Beer Sheva v Maccabi Tel Aviv
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/joHYJUOGU6CryK%2FaFsIaiA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Petach Tikva v Beitar Jerusalem
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/0kIDv9+eHDBvFl+aM8f+FA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maccabi Haifa v Hapoel Tel Aviv
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          EUROPE CHAMPIONS LEAGUE - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/MeckR6M2wUtfQ9povBEzzA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Paris St-G v Arsenal
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          EUROPE CONFERENCE LEAGUE - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/yNZC+eGhKdb4rE3fMjyDZA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Crystal Palace v Rayo Vallecano
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          UEFA EUROPA LEAGUE - WINNER 2025/26
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/oqnDkGMVU+3q0ijaCZC5ow=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              UEFA EUROPA LEAGUE - WINNER 2025/26
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          VIETNAM Vietnamese Cup Women
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Pu8R%2FT5DO9E8nJzPV2J61w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Phong Phu Ha Nam W - GT Thai Nguyen W
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/SjFmclJs%2FstscTV98iJMOw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              TKS Viet Nam W - Ho Chi Minh W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          FIFA WORLD CUP - WINNER 2026
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/oYfB8uA8DDm5TQYqWMeFvw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              FIFA WORLD CUP - WINNER 2026
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          WORLD Friendly International
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/HNbZYCw2pPEAUPJo5a6DyQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tajikistan U20 v Kyrgyzstan U20
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/n5OH+nD3MjVCsWmWCttRYg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Turkmenistan U20 v Uzbekistan U20
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          GERMANY DFB POKAL - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Novu9m8bQy7hVYmHIrLo3A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bayern Munich v Stuttgart
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          EUROPE EUROPA LEAGUE - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/1P2pPi6tyxYYDeY+OZUwwA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Freiburg v Aston Villa
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">SWEDEN Superettan</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/D1SB8I%2FRfFsRhcBxCUOKXw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Helsingborgs v Varbergs BoIS
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          AUSTRIA BUNDESLIGA - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/Bu39WM6YOJ0BHRuPWxa2uA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              SV Ried v RZ Pellets WAC
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">SLOVAKIA 2. liga</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/TvQtxuFQha41aDkZK%2FAJ%2FA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lokomotiva Zvolen v KFC Komarno
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          TURKEY Super Lig Women
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/lcGw+5gPrIfA7I18BQFUsw==/D8vRAY7hcUqVHOUHrK2ihg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fenerbahce (W) v Unye Kadin (W)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport2">
                    <i className="d-icon icon-2" />
                    <span className="sport-name ifTooltip">Tennis</span>
                    <span>(143)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          WTA - SINGLES RABAT (MOROCCO)
                        </span>
                        <span> (9)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/iy9b42xFZMk+Obudt2D7WA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Diae El Jardi v T Maria
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/2NDr+wUnSPjhOWbWfHuWPw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Emil Arango v El Seidel
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/ctmsGrgNH3WwB8R39FeRaw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              F Jones v Ye Kotliar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/xsGMrRWsvdMEg3i+NyMT2A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lis Zaar v Je Bouzas Maneiro
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/aXAt+Uyjhy+JdlWsuX5HUA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Martincova v Ca Osorio
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/HlynkNvNbut4IpUhfeJ5ww=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Nahimana v A Tomljanovic
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/VMvi59%2FLsMcR1rtpgeu8SA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tjen v Caij Hennemann
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Kt8ODHZL7YBNuHEScYnt3g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ya Kabbaj v Berfu Cengiz
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/75%2FCeGxV1WlWRcObu3zAzA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yu Starodubtseva v Ang Fita Boluda
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CHALLENGER MEN - SINGLES BENGALURU 3 (INDIA)
                        </span>
                        <span> (14)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/idCzUmSPIS0A7uhdgs9tcQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Digvija Singh v Vithoontien
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/9NJ1JYm+D0DlmGLOFo++5Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hami Stewart v Ad Vishal Balsekar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/lxAwwY0sg97RX9Mpv6xzbg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Honda v Phi Sekulic
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/%2FxhjPDK3qT03rs133UUCiQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Jasika v Rawat</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/f04rv3yzV+GU5J%2FOm1znZw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Karan Singh v Mi Leong
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/irpSS8ZROlePOy4njaXWqw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kee Smith v Man Sureshkumar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Vr+dZs+erYDLOSK0XAaD%2Fg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kuan-Y Lee v Kr Tyagi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/H5X%2FGnJXg814qT%2Fx%2FcKb5Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kumasaka v Yamanaka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/udga3%2FermaYUXlxMxtQfWg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lomakin v Ale Hernandez
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/993WycQHZeEwh+qynbEh8Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Max Jones v Sasik Mukund
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/4TJV6c1o5rhCQ9V4Jv7AAw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Palan v Isomura</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Z7zDU3riYf2a+PlnWH9dSg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ry Matsuda v Takahashi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/B9Lr572oSxloPgciKhfUAw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">S D Dev v Ivashka</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/z2r5JpjWiWC%2F2WSAMC7dqQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              T Chanta v Og Milic
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ATP - SINGLES French Open (France)
                        </span>
                        <span> (32)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/c5BNdhudJL0e2Es+u8TZag=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              B Gojo v Gueymard Wayenburg
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Y4GMbopGC5ZCuOBs15Tewg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Budkov Kjaer v Gi Bailly
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/fvvvG+gI0izOquo6bb0ylw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ch Rodesch v Riedi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/TYlEw+q9fInhzPpzkpYh6g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Choinski v Andr Andrade
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/%2FqP8y1gNxseeqMjzYA5Dog=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Co Wong v B Harris
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/AJIds90Gx41rBXJE66jaDQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Colton Smith v Guillen Meza
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/V17D+acS6U53X8kYzzFOdw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Cuenin v Dellien</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/kuTR4BF9tlC%2Fh%2FjiJcnaaA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Dougaz v Fe Gill</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/+bCQAXPQsJMAPQ3KSrFbmQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">E Ymer v Ar Fery</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/IyI4WfDOUnlLITMhse%2Fskw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Em Nava v Yu Bu</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/vSiNVcy8CBTQEMKGxOt4Aw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Fatic v Lu Mikrut</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/gx4lvsUq2yI%2FL81sC+FLPA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Giustino v Jacquet
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/n0Y9wkrO1UGiEwoOxg9DTw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Gu Heide v Da Added
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/JEdgT8ZZ0NWLfcSrfnzsdA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">He Rocha v Piros</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/TofzRpRDBz3eIaBQeIdJWA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Herbert v Uchida</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/PBJ8lqQJ%2FtzEDbusK3mCug=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              J Rodionov v Lajovic
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/4eHpC7bmuRhBkL44I8OmmQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ja Faria v Dimitrov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/EvfecN3XZAZFMpSKIaE2DA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Ja Mccabe v Kolar</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/1OCzZJQONvSy9wG6X1MDLw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Je Kym v Gentzsch</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/+9l9EGhJtpr45kcfIaAkWA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Joe Schwaerzler v Chidekh
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/dN6MqCCfxsSa+EqXPzh13g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              L Broady v Gi Cadenasso
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/krXIFJu+jXcjxZE608pSYg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              L Midon v Carballes Baena
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/qg2lkM6AMAo26ACdIiGVGg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Lajal v Safiullin</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/60K5OJQrBeG4NyiKKrgrGw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lu Pavlovic v Wendelken
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/wWNJkBirFiFBk7tfV2SQVA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ma Dodig v Yi Zhou
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Wv9edm4YXsFYWV54rlfFoA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maestrelli v Ri Noguchi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/nULRrTAHIPXupfwNpCv0Mw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mayot v To Barrios Vera
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/K5K9EwScNddRVPGKo1dmHA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Molcan v Ol Crawford
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Pk4FU9Z50X5NmsZSxlkDEA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Moller v Skatov</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/g0w1D2sdsY9ElsBZc8KOgQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Re Sakamoto v Martinez
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/u9+kUL3da2qZDKBqObYn1A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Schoolkate v Coppejans
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/CFtimkAidZUkESeMs6YKKw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Th Seyboth Wild v Yu Hsu
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CHALLENGER MEN - SINGLES ISTANBUL (TURKEY)
                        </span>
                        <span> (10)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/wNinW84X8KVJporPnsgNUA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Alkaya v G Kravchenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/GhbKSRKmh3+HqblJvFi+bQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              An Nedic v S Fomin
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/OqMMj3uPAPBhfGgWTeAlGw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ben Hassan v Jianu
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/PNBUO2BhN8D3M4cTCMAhLA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hy Barton v Dutra da Silva
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/b8juCxmY7ACmsk%2F5GbATtQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ker Yilmaz v Matusevich
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/JPSRBZ9Is02jDbWxWuxFWw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kuzmanov v Da Rincon
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/XPbX6HlS7CzYSqQglPBELg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Poullain v Poljicak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/n99aX0u%2FQf5bVmPiaTmILA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Saraiva Dos Santos v Yevseyev
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/qNjzbwBfieeTlX2xAtS2SA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              T Monteiro v Sanchez Quilez
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/B0%2FOnZL6HmIjtFeY0nCO3w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Turker v O Ayeni</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          WTA - SINGLES STRASBOURG (FRANCE)
                        </span>
                        <span> (6)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/WFAhNV9eLa+q+1zcHJnG3g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              A Li v Alexandrova
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/wrz4iBXPHCFTdphVYDuW1g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              D Parry v E Raducanu
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/8yXdte8oa12z5juzpIE%2F4A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Frech v L Fernandez
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/eNtez6hf2PpbTjmYCe2YIg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pe Stearns v D Kasatkina
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/AbvjCINeWXRT2pqszx6Frw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">S Zhang v Bucsa</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/PVe7x1IYjgK+3d8W%2FNYWcw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vi Mboko v Boisson
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          WTA - SINGLES French Open (France)
                        </span>
                        <span> (32)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/ZJXZJ0XOxQ3L+5cE0qHpZg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              As Krueger v Rouvroy
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/7l2a1mqq4q5WNLu+gyPEjg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Aya Akli v Kawa</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/PRBETqP7Ul5NLT+YqNC5ew=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Brace v Ma Timofeeva
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/q1w5ZcEOAuYQqXB1oqW2JA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Burillo Escorihuela v V Tomova
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Z6FpTzc8MY3SNqsnP6TLLA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Daph Mpetshi Perricard v Andreescu
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/TrOdV81Jd3iZOlOxwkTv0w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">F Jorge v You</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/qEIiMP8wOCGmFfR6hpGQSQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              G Maristany Zuleta De R v Belgraver
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/2sr65aTH%2FAjMlWzWrFp28Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">H Tan v Thandi</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/kE%2FaJPoLzoplVZOVedzbqw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              J Riera v Laura Samson
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/++BDb+QVKvb4hjD2VgTPWg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jel Vandromme v A Ito
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/cwIEpvRFiwuqtKQK1WYDRw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">K Juvan v Siskova</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/A02Q7aZkflhlXYdIq7TWgQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              L Bronzetti v Lepchenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/A07%2FMOWMA9E1TDyvezaK3g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Li Fruhvirtova v Lu Havlickova
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/3nxepWzEm4lo98koy6Hgnw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Luis Giovannini v Guerrero Alvarez
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/qXINkzUicUmFTRQe4f07OQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Lulu Sun v Yex Ma</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/I7IBVANmCgeybZaA4ZY5Wg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Masarova v Carle</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/3CopsNFtuRWWCQJ5xpAKug=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mladenovic v Xin Wang
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/InRKyoHXWpOl+m%2FzgOq+Iw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Monnot v Bassols Ribera
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/WA24uNZgqTwyOvUqe+bSwA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              N Brancaccio v Kai Quevedo
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/%2Ff1dABTf6yod9On6e3rFtQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Pigossi v C Liu</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/fZTkRn+BxDE106qGHCYq3g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Po Kudermetova v A Koevermans
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/u0mwufL9XAJsFIgttnduCA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Ponchet v Hon</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/+RX3XVt0LtFHJwcffgZBCg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ro Montgomery v Inglis
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/HanUwZ9iMQnlF%2FEvgVLhqA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Sebov v Kuzmova</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/A+zAmdMU90XM535WhE6pPQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Semenistaja v Shymanovich
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/iJ4lamqsnuuB97%2FMurdFxw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sramkova v Kayl Cross
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/EwaV2r7MIMlVToJaTjNHLw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Stefanini v Charaeva
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/7DgCNSVN0QmjgMByfOU9gg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tah Kokkinis v S Hunter
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/NLDik8aW3fQVwgh01b2IXg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Teo Kostovic v Mandlik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/2mBZp55ThDcv6W50bj2+zg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Vidmanova v Gao</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/lIjJqFFLJ4SCkZdLgV+%2Fdg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ye Ku v Ka Pliskova
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/beE2V3KidrLm7P%2FZQV3+vw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Zavatska v C Zhao</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CHALLENGER MEN - SINGLES CERVIA (ITALY)
                        </span>
                        <span> (11)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/J0AWQTDsKhlBa4188X7m1g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Andrea Guerrieri v Ol Prihodko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/OGJnyP9JLq7tzn%2Fbvl99OA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dostanic v Fr Forti
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/iuCEfN71nBYGavBQ6cRFxw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              F Arnaboldi v C Caniato
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/KNqQa+WhllFSrWs541ZTXQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fi Romano v Dalla Valle
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/nbt4Dkk5bgn2aB3GGSmWkw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Iannaccone v J Martin Manzano
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/UMIryBvJ6jHN7A%2F7SGlqFw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Io Xilas v Ribecai
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/l6I2UrO1XbjRjfhHog2Xcw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ivan Ivanov v Roncadelli
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/uvV6eCarpVW6m5dAEevEXQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              L Rottoli v Piraino
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/pwcEgbpNMKkZ3yiJFezVGQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mo Kouame v Vasami
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/ackgW7+4X4hnZ1nRpUHiqQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oradini v Gu Justo
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/KGxXFfC8Z6ao0npktcBOaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              T Compagnucci v Li Tu
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITF WOMEN - SINGLES W100 Takasaki (Japan)
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/EnsgTXOG8Ju+iwpjiOZDmA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Miyazaki Yuriko Lily - Sara Saito
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ATP - SINGLES HAMBURG (GERMANY)
                        </span>
                        <span> (8)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/OduWZA0f5tMi7IXWTi7CEA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Al Kovacevic v Ar Gea
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/3Y8evTPXEHXCf5tBYojinw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Altmaier v Be Shelton
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/hcidGcfYltwZaKdgXcbSGg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Cobolli v Ig Buse</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/vrczPL4JtUTqtjsFzOBl%2Fw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Darderi v Burruchaga
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/oiHzOa%2FsaABdETcnZLAB+w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              F Auger-Aliassime v Kopriva
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/+8e+mHCmgc87Oiaryxe33g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hug Gaston v Khachanov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/Myn%2FIE37unrJEC9y4Ho6Vw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ju Engel v Humbert
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/xtkiyFCXfeGoTF7hE8D7rA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Paul v To Etcheverry
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ATP - SINGLES GENEVA (SWITZERLAND)
                        </span>
                        <span> (5)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/tVR7e%2FEZKqMq648rJFF71Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Brooksby v Ruud</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/rSuPs%2Fuw11gVtDnTc%2F+o4g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Djere v Manuel Cerundolo
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/yAd8W4slz%2Fx+7J2E70WTXw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mannarino v Collignon
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/6Lqf7vNZZP91dH4rdnLhpw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Nish Basavareddy v Munar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/96xYM82Jxi+zEj+f18fg6Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Popyrin v Cl Tabur
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITF MEN - SINGLES M15 LUAN (CHINA)
                        </span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/q0yjI5CsroyeJkVkK+8c%2FQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Minghui Zhang - Ziheng He
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/AkNPIi22uAja7UPbYLkaow=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Shu Muto - Eric Jr. Olivarez
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/f2j9PuNdmz3F5rus9gnKdA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Toshiki Karigyo - Shixun Zhu
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/wYi7MgY2Sr0bWitakLkEtg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Xiuyuan Ye - David Qariaqus
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ATP HAMBURG OPEN 2026</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/ffh8hssL8IlquLmRAOgwjQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              ATP HAMBURG OPEN 2026 - WINNER
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITF WOMEN - SINGLES W15 TOYAMA (JAPAN)
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/apo3zry5ZX0X8OTQhqQOnw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ayumi Miyamoto - Mutsumi Uemura
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITF WOMEN - SINGLES&nbsp;W15 TSAGHKADZOR (ARMENIA)
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/fnS242jtiqKJ+aCeG+KXvQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Daria Kuznetsova - Kristina Belkova
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/B5KMEinkG54yyE4QuqyjaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Darya Kharlanova - Kristina Kroitor
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/5P6rJf6osVBG75hObT9LtQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michelle Kelly Tikhonko - Maria Azizyan
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          WTA STRASBOURG OPEN 2026
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/82pWKYOh32FbA1w5hpzpfQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              WTA STRASBOURG OPEN 2026 - WINNER
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ATP GENEVA OPEN 2026</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/J2Z7kTI+I5yfaPXUkAdMsA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              ATP GENEVA OPEN 2026 - WINNER
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITF WOMEN - DOUBLES W35 Wuning 3 (China)
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/CTKAQReRu7qVZpVRV2jSuQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maria Golovina / Maria Kalyakina - Monique Barry /
                              Chengyiyi Yuan
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/WsZMv4nOlL3k3bjF1VVZVw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yiru Chen / MA Ruoxi - J.Lu/M.Ozeki
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">WTA RABAT OPEN 2026</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/AGlIB2BONufAI0wAmWvfHA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              WTA RABAT OPEN 2026 - WINNER
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">Testing</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZMsVdzACxXZhtFWzJX9BDA==/wxertRl+NUI1RrktY2wlpQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Test 1 v Test 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport8">
                    <i className="d-icon icon-8" />
                    <span className="sport-name ifTooltip">Table Tennis</span>
                    <span>(191)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">CZECH Liga Pro</span>
                        <span> (97)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/G471R0aB0CVdW1NXH7MoRw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ales Barton - Martin Huk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/h6O8Aj3uMqdFLfQu%2F0NQQQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ales Barton - Ondrej Svacha
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/YH3UAd+2+6jnXv4dVRGx7Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barta Tomas - Hoang Tai Nguyen Ba
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/tpVvVNu2eWqMCEIaOHwUlA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barta Tomas - Tomas Dousa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/8PvVEquDX2T6YvMtNfHUPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmitro Parhomenko - Tibor Kolenic
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/9dTAL05wuqFbch%2FVr+gNJw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmitro Parhomenko - Tomas Dousa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/CSlg4ftCvqhWe08dvAwLFw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hoang Tai Nguyen Ba - Tomas Dousa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/r1Rrrghzd314eBL69UWPTg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jakub Levicky - Dominik Oborny
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/TiVkZqDibaUC8hShRHlVPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jakub Levicky - Petr Danko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/vgKufbi7nhmmVRPZDZH+tA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jakub Plachta - Michal Chalupa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/1htfmVC3+N%2FaN2SgKlWldw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jakub Vales - Jan Zajicek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/LYFpn2D26olEmw8my74%2FtA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jakub Vales - Vojtech Koubek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/xySQZq06UiICCe7ZgRZZlw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jan Dzida - Martin Biolek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ZvDgmFLpNNsrTbyNn1NeRw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jan Dzida - Michal Kratochvil
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/JYA93InfMaXf8QlAMBi%2FlQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jan Zajicek - Vojtech Koubek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/8ybYG8HhgAytmHM6pKpfag=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jaroslav Strnad 1964 - Milan Cetner
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/z+jhnVEyQvc2E7oaIZoJVw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jiri Dedek - Marek Placek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/nWAb6TapB0NXJBQ31O5Fnw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jiri Louda - Milan Klement
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/wudDx0SwReMyzeBMbjQvvA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jiri Svec - Ludek Madle
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/WRav0+TCl4Y%2F71DEMuPYZw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jiri Svec - Milan Vrabec
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ZyonuBs9twrbwexKIr5zcQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jiri Zuzanek - Michal Vondrak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/q2GBGYnM2PKEDoHNiQtOyQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Josef Cabak - Jakub Levicky
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/%2FN2a0LdKXSlMjkAelmC3cw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Josef Cabak - Marcel Heczko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/DI55WvAdhalFfJQMgUmNaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Josef Medek - Jakub Vales
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/YZ3bbrPcG1RjIP7tplC0ww=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Josef Medek - Jan Zajicek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/mXrUYmPyjE5gPpkGm+3pKA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ludek Madle - Lubos Forman
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/zhbh5qVGYPW0P6xwTeQFnA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lukas Jindrak - Jakub Vales
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/spDUhXXNNLcVW0e4pFb6dQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lukas Zeman - Lukas Jindrak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/+f76X5IfBHzAsDB0X8lAow=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Marcel Heczko - Jakub Levicky
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/5nGJEhU7NQTnroXmW52qxA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Marcel Heczko - Petr Danko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/KaM8l364NaqHOvAA+7eVAQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Marek Placek - Milan Kolar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/YEm2qoq56l9D%2F6T31FaXsA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Marek Placek - Miroslav Svedik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/l2Z0A4mi6fVwzau9fyLIZw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Martin Biolek - Tadeas Zika
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/uCmS2551Au8oSo8ZnYZWZw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Martin Huk - Matous Klimenta
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/V6a0bzFmbuLxToNs9tv0Fg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Martin Huk - Vojtech Svechota
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ePvo25zYiDAmojPAUN3F3A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Martin Stefek - Milan Cetner
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/Hz0PP8AkFFlB71GXMHaCJw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Matous Klimenta - Radek Rose
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/7V20ZdFYm%2FcQWylS6C29cQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Matous Klimenta - Vojtech Svechota
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/UDtRSc0HJ5BfNSBwp1aQhw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Matyas Navedla - Radomir Revay
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/k97tZV96aqWhcOoYXLzJ2g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Cabis - Radovan Polasek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/lhud1NklT2hR78rRxqJGfA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Cabis - Tadeas Zika
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/oeEQdqyhmm5cqX7kpXsm%2Fg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Chalupa - Radim Urbaniec
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/eT0E%2FzSHh1J5NaoGPAbs6Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Chalupa - Roman Opralka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/rfxpoOA8XlsfUKWfWtBViA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Kratochvil - Martin Biolek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/z9VeyQoiIWvGSqwPueawlg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Kratochvil - Tadeas Zika
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/qehomh7NsybyK3kqGf1jjA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Vavrecka - Matyas Navedla
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/lKX0ezBgNbR++tiSVUd3Ow=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Vavrecka - Michal Cabis
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/gJdclnX1GbSs4m7mZRXq5g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michal Vondrak - Viktor Vejvoda
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/8lxruo2SF%2FgsJQvAltJzxw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Cetner - Milan Chalupnicek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/e0qktcaX%2F6rhCkAUy5iBew=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Cetner - Vaclav Hruska snr
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/3qF2sPgldyIWPb%2FMsD+IWA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Chalupnicek - Jaroslav Strnad 1964
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/lVxFq2nMOm7T5YZ6zPIAJw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Klement - Ondrej Cmerda
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/F0jZErBno7ApNBYsYZX%2Fdg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Klement - Sebastian Kasnik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/nq7rVBKppAp2h3zsN%2FKdQA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Kolar - Jiri Dedek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/5iRvviFooOd6MM0m3Cp5Ug=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Milan Kolar - Miroslav Svedik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/nKFZY9DlOkuNw6iMP2G3zA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Miroslav Svedik - Jiri Dedek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/7UOKy7cQ27reVgHbNuHijA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ondrej Cmerda - Jiri Louda
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/WcZg7oI7NhuHYdPSbI%2FBwA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ondrej Svacha - Martin Huk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/B7dO26RapYlC87upyZMTWg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ondrej Svacha - Vojtech Svechota
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/5MzKbjIrJnArqQ4oy61wOg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pavel Varecha - Filip Zurek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/OO2h0BT20IE99Rji3kTgFg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Petr Danko - Dominik Oborny
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/j0S+BeO72aEaCAqUN1enfw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Petr Danko - Jakub Levicky
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/16rFscJQ8Kt3EvGcrIluvw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Petr Danko - Josef Cabak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/acUBkZ7tJfRTIK55Lf2Bhw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Petr Sebera - Jiri Zuzanek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/UItjCviKyRdTOIEVVTGpDQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Petr Sebera - Michal Vondrak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/1jffzi5pvqZmIVc2cNam7A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pokorny Adam - Matyas Navedla
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/fvCmQ%2FbAVjjfyDn67Jqzuw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pokorny Adam - Michal Vavrecka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/yVV44luHkELdRlm2+kLbQg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radek Rose - Martin Huk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/xB%2FfJXYDbVVkHx+BIVv4ig=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radek Rose - Vojtech Svechota
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/VdDDsAOR%2Fgnenc34cMUDnQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radim Pavelka - Dmitro Parhomenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/whA9B0zYZd4C79497r2F7w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radim Urbaniec - Roman Opralka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/w5PivCYFShVK0zzID+5mPw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radim Urbaniec - Roman Opralka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/jpx85Pbwbg93D3fo7Fbw7Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radomir Revay - Michal Vavrecka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/GE3WnTCpABNaZJle2en2Qg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radomir Revay - Pokorny Adam
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/bx+tDANYbdRhcKuQ37VkGQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Radovan Polasek - Michal Vavrecka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ShuIQ6gKPcqGn+JbuNaHwA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Roman Opralka - Jakub Plachta
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/rC3+BJ3RZzl%2FUGKhk%2FKqAg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Roman Opralka - Vitezslav Burdik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/JJosDaWltU4zTVki0Wcziw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sebastian Kasnik - Jiri Louda
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/l5EEu0IlIuHoutxb9O4zKw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sebastian Kasnik - Ondrej Cmerda
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/lilpRez1MksTFf97LZyRhg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tadeas Zika - Jan Dzida
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/YfAm%2FQO4PNzjRd%2FkiJhJcw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tadeas Zika - Michal Vavrecka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/vP7OhD6%2FAjGSuIDZKsVQRA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tadeas Zika - Radovan Polasek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/wDLvrsSGQKtYw%2Fn77xKkdw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tibor Kolenic - Radim Pavelka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/HgBFsrsOrFRx5SJro34vEA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tibor Kolenic - Tomas Dousa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/hiMCWsf%2FDqKTS2D4KQWFaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tomas Dousa - Radim Pavelka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/zgX2f%2FKXved4+8zbAZeDng=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tomas Dousa - Vladimir Postelt
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/fqeCN93MMYRAAco6JAKaag=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vaclav Hruska snr - Jaroslav Strnad 1964
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/vjLZT%2FqkEVt4QUKNVrVamQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vaclav Hruska snr - Milan Chalupnicek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/oSucq94o%2FulCLDcJmEdSEw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vaclav Hruska snr - Petr Franc
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/tgbOhDRsjGK7aDB0hMDhfw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Viktor Vejvoda - Jiri Zuzanek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/AtDUmWcywBwY+ZLsv4kyAA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Viktor Vejvoda - Petr Sebera
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/lgxTmPvlc1PSAGyI6x1cZg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vitezslav Burdik - Radim Urbaniec
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/fWwvqJ6zYaxLZMtsCiF2cA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vladimir Postelt - Barta Tomas
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/76fRe0n59GtRdiub344DAg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vladimir Postelt - Hoang Tai Nguyen Ba
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/NmlB4JEdVkgTUzLuddnSJg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vojtech Koubek - Josef Medek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/leSe8HfWQ9jMsCLCuIu%2F3A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vojtech Svechota - Ales Barton
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/7XpeDTEkSNx+4ZJpNQ2m8g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vojtech Svechota - Martin Huk
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">MEN Setka Cup (World)</span>
                        <span> (93)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/BOIqhbH4OX1fI0iX0MhDXQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Aleksandr Ivchuk - Vladimir Chernobab
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/qtzMcd+MYd8+rVkyVvhDFA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Alexander Sidorchuk - Alexander Rodin
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/jtjsMya7xky+diUvLnoqhg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Alexander Sidorchuk - Oleksandr Storozhenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/LtzUJ5RHaJohNVv8y%2FmGMw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Alexander Sidorchuk - Volodymyr Hrybeniuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/vShrtY0oABVMYEOHch0FOw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Andrii Troian - Oleksandr Shyshman
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/T2ZCxX5kh7r0WsusEj+iFQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Denys Pesternikov - Oleg Pavliuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/Yvs76p24SQZrbiM9aKvWrw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmytro Khairov - Ihor Emets
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/mQLGp74HYXEMBLH7FDc7eA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmytro Khairov - Oleg Volynets
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/3hQftkt38khXWjJKlo89Hw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmytro Neborak - Oleksandr Shkurupii
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/GKxCeNvP380nwoqn09+TNg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmytro Neborak - Oleksandr Zhurba
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/XKjXxm+v9ASbTCTp98jcpA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmytro Prylepa - Maksym Hubenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/AesqKl7%2Fi7D9YbMkRpFdxw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dmytro Prylepa - Serhii Chuhai
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/Mj8Qjoj5BRAUSiwCR%2FySkQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Eldar Bektemirov - Serhii Khandetskyi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/tqM%2F4aQ0uZOSwfyRapMO1Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fedir Chashchin - Stanislav Rohotskyi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/oQcSuVkJxWSUwh0KM23sLg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fedir Chashchin - Yevhen Bielokon
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/WK+iaTfqiO7fg8qj894dYQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ihor Emets - Andrii Troian
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/uoLZSWG3QjcmLH3Z%2Fv6l2w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ivan Fashchevskiy - Alexander Sidorchuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/QxlaN3zLbF45cuKJ1qM7Iw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ivan Fashchevskiy - Oleksandr Storozhenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/Au0UiSD8jwDth9zt%2FkS4PQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ivan Fashchevskiy - Volodymyr Hrybeniuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/dkD3vuuwMUO4ukX9HKrG%2Fw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ivan Nitchenko - Evhenii Hrytsenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/TdoPO+YQGv1ZOBis5F%2Fg8w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ivan Romaniak - Serhii Rak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/0Y3CksTFQC1Na%2FzmmOoBJw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jan Botka - Tomas Hanke
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/x9WUoIwMP9jTpPvXKV42tg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ladislav Tuma - Jan Botka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/p3I11CUBG+d25WzqzkFMgw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ladislav Tuma - Tomas Hanke
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/rRw36NXxXUwZwGo+%2Fq0x5A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ladislav Tuma - Tomas Stejskal
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/JbsltzLODgI0H4ciOeP8JQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maksym Hubenko - Oleksandr Syksa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/tPH563TPitmUjY2TYqk82w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maksym Hubenko - Sergey Maluk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/AkC7mFifIdAIMyIo8rO08g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maksym Hubenko - Serhii Chuhai
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/gLrYdc1gsIjWBTUvE+0HYw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Matej Svitac - Jachym Juppa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/yBseCXqdpZWwHt3NF7EdkA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Matej Svitac - Tomas Hrstka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/zWdABG6vkU4%2Fo5QBepFFbA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Matej Svitac - Tomas Hybl
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/K8yH%2F9skX7mkaLTCdB7vbQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michael Hasman - Jakub Mejzlik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/NFqhQ5u4x7q9pQxwl9UX0g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Myhailo Levitskii - Oleh Torianyk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/xtDl9X77hpiHRUW8xfXYkg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mykhailo Potapov - Alexander Rodin
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/9iEY99rTDneUf5jyCb7lTQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mykhailo Potapov - Ivan Fashchevskiy
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/THhr9Ct7JrxzuwM5l5eI%2Fw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mykhailo Potapov - Volodymyr Hrybeniuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/AjOF+n8faFvUikvT2Dh87Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mykyta Zavada - Dmytro Neborak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/okoUyTE1w9iUqiRlSGqaPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mykyta Zavada - Oleksandr Shkurupii
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/sueGLo8mmZlk5UyGf8pq7g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mykyta Zavada - Oleksandr Zhurba
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/TLYzsJpAJxYWdASghFBQqg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Nazar Danilyuk - Bohdan Kohut
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/%2Fg1VKNdbNTrT7REsR6KKdw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleg Pavliuk - Serhii Rak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/eRn9QQnkoYNFNp+Gmu6YLw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleh Torianyk - Dubinin Ihor
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/FpcT8MuI1qJzmQowG6rIew=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Hoholev - Dubinin Ihor
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/3AlPMHShbgBz5riZM4b8AQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Hoholev - Myhailo Levitskii
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ou+%2FOtURWbnUZ%2FIkDpQSZQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Hoholev - Oleh Torianyk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/CzlD1NJD5os7+UU3SvtNaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Lyman - Sergey Maluk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/vEm+PikHwlERQcmU7IQDoQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Shkurupii - Dmytro Neborak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/jn4emz6ZESBr%2F4S36z3MtQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Shkurupii - Mykyta Zavada
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/JM9nAeXGXGjv7hOJLEqplw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Shkurupii - Oleksandr Zhurba
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/k26y6dK403wTuGJUUpRlDA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Storozhenko - Volodymyr Hrybeniuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/+evVexwIYWsqMBGapvWARQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Strutinskiy - Evhenii Hrytsenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/FmY9j7UikY++u29laTo%2Fnw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Syksa - Oleksandr Lyman
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/UjOyrx2PzHUH718WkW3H8Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Zhurba - Dmytro Neborak
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ZC7u2MoA7tPsNcZplpD5RA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Zhurba - Mykyta Zavada
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/OSjARiTt7tm60Q47agtVGg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Zhurba - Oleksandr Shkurupii
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/gndyqZgb4HBnu7vsU7mpRg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksii Metla - Hrabskyi Andrii
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/okM0Rdi8FCOg++5a4ujMoQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksiy Shindel - Eldar Bektemirov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/HtbqCgZwvA0LSxu3DYB%2Fig=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksiy Shindel - Pavlo Ishchyk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/AJep62Cw+IX9wNBkKBGDTg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksiy Shindel - Serhii Khandetskyi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/1iRHN7U9P9pAunK6d8dE%2FQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pavlo Ishchyk - Eldar Bektemirov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/uPkBPsWCwQoQ6T8M5KrC6w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pavlo Ishchyk - Serhii Khandetskyi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/z%2Fy8kLHoVe%2FUdgcFz+aK2w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pohorilyi Mykola - Dubinin Ihor
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/HQGGbhsesvMfGbCGg07LTw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pohorilyi Mykola - Myhailo Levitskii
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/gv4s6PPi2B25kzjbwGv9Bg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pohorilyi Mykola - Oleh Torianyk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/FQdtnW1VwmJdVKqCU3PNJQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pohorilyi Mykola - Oleksandr Hoholev
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/PKCtd%2FrxjEsEffuVYyDGAw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ponomarenko Tymur - Eldar Bektemirov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/pSZ42sT56UtX%2FCfjnpteaw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ponomarenko Tymur - Oleksiy Shindel
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/Fq14XRg2ol+LepmuB%2FrP9g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ponomarenko Tymur - Serhii Khandetskyi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/VvujZ5KOIJb6%2FriqNsioJQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ponomarenko Tymur - Vitalii Kobets
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/35B8zCi6L9wZAZ4hKxNvPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Roman Konkulovskyi - Igor Sukovatiy
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/tEoF+ZYedRanZ0QSt+HosQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sergey Maximiv - Bohdan Chaikovskyi
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/wJs6rIhLoS95s58ClPB%2FXg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Serhii Chuhai - Oleksandr Lyman
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/A+9SAiobBKp5v%2FPjYBlbeQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Serhii Chuhai - Sergey Maluk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/lopCs0pUu0UXVdLWDhMGPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Serhii Semenets - Maxim Stetsenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/FgDSbt8WaizUPImMSK2HZQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Serhii Semenets - Vitalii Korniichuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/6%2FSDz4u5fdMv%2FpggziXz2g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Stanislav Rohotskyi - Vitalii Husiev
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/kevT8OfY9feyVycf8Ky4cA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tomas Hybl - Jachym Juppa
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/ebjl2WwAjkTlIwZxI7Py4A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tomas Hybl - Tomas Hrstka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/g29xrKXeOQmVUP5Qbd2bcw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tomas Stejskal - Jan Botka
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/kgwx4kBP5ZcMCB2xiPKDVA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tomas Stejskal - Tomas Hanke
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/zQ3BCUx4Xzsls988MM19VQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              VIktor Kucala - Jakub Mejzlik
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/WRw3xMdzjBF8MBulVKCrJw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vitalii Husiev - Ruslan Serhyenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/DAVu0xKDa7ruVEin%2FVcLcg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vitalii Kobets - Eldar Bektemirov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/0y0iKIZs4Q9X6T5EbWjiLA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vitalii Mukhin - Serhii Semenets
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/v2ZflKzkH2ZWVspYfALi0A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vitalii Mukhin - Vladislav Stukalov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/0tuOKak7p8VswGEMIKIxCw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vladimir Sawolyuk - Oleksandr Strutinskiy
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/x1Ul6L0LrU5c5CxZ%2F5KAtA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vladislav Stukalov - Daniil Novakov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/rrRbei3Ak4kTkrSpjjuQpA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Volodymyr Hainiuk - Vitalii Husiev
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/8PQsgLJt+pyPOOZyjiKx0w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Volodymyr Hrybeniuk - Alexander Rodin
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/gZyzUt2pK43uCiSt%2FV3B2g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yevhen Bielokon - Ruslan Serhyenko
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/Yo91HO6OK+0U5ugtttnhow=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yevhen Bielokon - Vitalii Husiev
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/1S0BttAWGKw7l+O%2FozBNRQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yevhen Bielokon - Volodymyr Hainiuk
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/I2goiR4LNgiB+kdpl27cDw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yurii Zvolinskyi - Evgenii Bakin
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">Testing Game</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Mv1qUHVhzVyTEtA2KA7K6w==/kgVg%2FwC+HJ5MpWBjC96jPQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">TEST A v TEST B</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport22">
                    <i className="d-icon icon-22" />
                    <span className="sport-name ifTooltip">Badminton</span>
                    <span>(7)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BWF WORLD TOUR-MD Malaysia Masters(MALAYSIA)
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/83WPLV3HCrkiEBhpWFbufQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Toma Junior Popov / Christo Popov - Madathil
                              Ramachandran Arjun / Hariharan Amsakarunan
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BWF WORLD TOUR - WD Malaysia Masters(MALAYSIA)
                        </span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/1bPDpuFvhpEnXorNnffZgA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bengisu Ercetin / Nazlican Inci - Yi Luo / Ting Ge
                              Wang
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/WBhmUtLVnaORxurwcw3XSQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lauren Lam / Allison Lee - Laudya Chelsea Griselda
                              / Nozomi Shimizu
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/ZNz8ldplk6HrwXeUHoE%2Fdw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lin Chih- Chun / Yang Chu Yun - Phattharin
                              Aiamvareesrisakul / Sarisa Janpeng
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/dYLKs8ju1+7fZdUnfxf2Kg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sayaka Hirota / Ayako Sakuramoto - Paula Lopez /
                              Lucia Rodriguez
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BWF WORLD TOUR - WOMEN Malaysia Masters(MALAYSIA)
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/f6JLmz378B0rIaAzr4vyrw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tanya Hemanth - Sin Yan Happy Lo
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/tJCZSxa%2Fh5YJBkhNVs6PHQ==/VDSeH+NTc5s+4rDvKiruOw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Yu Po Pai - Ching Ping Huang
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport68">
                    <i className="d-icon icon-68" />
                    <span className="sport-name ifTooltip">Esoccer</span>
                    <span>(31)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ESoccer GT Leagues (E)
                        </span>
                        <span> (16)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/Y0Ey9I5UymSz2iAVMcc+Rw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Arsenal (kangal) - Paris Saint Germain (ultrex)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/qJJWIJ%2FWNK2GH6XoJ0cMBg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barcelona (eros) - Chelsea (lio)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/6YeklbVzN+oZCz0VisLKVw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barcelona (eros) - Galatasaray (banega)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/NBS03ZNptHxFl%2FktH%2FXcOg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barcelona (eros) - Newcastle United (crysis)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/qMN6B0PuPlChWHmZf8%2FHGg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bodoe/glimt (David) - Chelsea (lio)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/WN7+oia0WsYodeqY61uAUg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bodoe/glimt (David) - Newcastle United (crysis)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/Wt6FWyv0%2F3lahHaOIrU3xw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Chelsea (lio) - Newcastle United (crysis)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/WfQVIievxkzWmVdB2B2GIg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              chelsea (lucas) - Barcelona (ultrex)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/F6q0h9Wcd94mevdSv9tTXg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fc Bayern Munich (crysis) - Arsenal (david)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/4sQsMzo6G6pkWM6WlJbuaw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fc Bayern Munich (crysis) - Paris Saint Germain
                              (eros)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/AVWYpJYBw%2FS1Zz3eCqUBaA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Manchester City (lio) - Arsenal (david)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/PJ5GuiaC0XHLJo76dhE80w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Newcastle United (crysis) - Chelsea (lio)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/t0SSFia1MhoaCel8HVGeeA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Newcastle United (crysis) - Galatasaray (banega)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/FDM6GEsii%2F+gXmvZcWzwGw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Paris Saint Germain (ultrex) - manchester city fc
                              (lucas)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/hRsuNpOqGZhjyXx4T91iSw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Real Madrid (banega) - Fc Bayern Munich (crysis)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/u7HIZZp9chHLDCztAJnEIg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Real Madrid (banega) - Paris Saint Germain (eros)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          E-Soccer Battle - 8 mins play
                        </span>
                        <span> (15)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/i33sdpHF8c+V2arGq%2FGXPw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Argentina (KRaftVK) - France (nikkitta)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/1K6wweMJTj7TkxxfjfcIZQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              England (v1nn) - France (nikkitta)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/djQSNa91gl5XgOMdadqKHg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              England (v1nn) - Spain (mko1919)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/mpPCyG9WjNNa%2FBVLJ7hMFQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              France (nikkitta) - Argentina (KRaftVK)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/CZ2LbbV99i5lBbzf4a0eXQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              France (nikkitta) - Spain (mko1919)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/hOEN5SJQC+kOZW7RmtSf1g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Germany (uncle) - Argentina (KRaftVK)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/i5Msdr43+5JefxgKruKNrA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Germany (uncle) - England (v1nn)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/wshHByZTjaebru7FoxOhzQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Germany (uncle) - Spain (mko1919)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/123hrQMwJvtbfKUDTSerPw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Juventus (mko1919) - Bologna (kraftvk)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/NyVeMbMrljHAbF2NZJU3qw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Juventus (mko1919) - Napoli (v1nn)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/0wZtnJW2yoWxNlDwBq3nUQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Napoli (v1nn) - Roma (uncle)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/r+lXC1SeTVkB+eppEi2dYQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Roma (uncle) - Juventus (mko1919)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/EvQayVoR+yUrly0aXHmzTw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sassuolo Calcio (nikkitta) - Roma (uncle)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/BHfMlC9SWahS0WfJ36xjAQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Spain (mko1919) - England (v1nn)
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/1%2F5Q0WLF8MyHyNQ3qgi5sQ==/ow+RLegNeuzJIxOrk+AiAA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Spain (mko1919) - Germany (uncle)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport15">
                    <i className="d-icon icon-15" />
                    <span className="sport-name ifTooltip">Basketball</span>
                    <span>(74)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ISRAEL SUPER LEAGUE</span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/4KGLe7GCR7t9shbtrwvJOg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bnei Herzeliya - Hapoel HaEmek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/3QmeMoRHSfCnS8OnUfcqTQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Jerusalem - Hapoel Beer Sheva
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/yQEt3QMtsG6aVFwlXmkFkw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hapoel Tel Aviv - Maccabi Rishon Lezion
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/H8aV2%2FswgEU+g5kCkzswYw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ironi Kiryat Ata - Maccabi Irony Ramat Gan
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">ROMANIA DIVIZIA A</span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/gsDLxPwj7SGoXjMDWI+LeQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              BC Timisoara - Rm Valcea
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/dUYTU3MyefHJIj+Max21TQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Steaua Bucuresti - CS Municipal Ploiesti
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITALY LEGA A - QUARTER-FINALS
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/nAkZJQ6jqEpCFnr0uCDqIg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Umana Reyer Venezia - Bertram Tortona
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/S5HgwCBDD+jBYt%2FL%2FVW2AA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Virtus Segafredo Bologna - Aquila Trento
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SLOVENIA LIGA OTP BANKA - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/dFA+ZHBCjy9YkuEMrJJ%2FcA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sencur Gorenjska - KK Cedevita Olimpija
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          HUNGARY NB I. A - 3RD PLACE
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/SPVkb5K8Ur+ueo8x3dW6FQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kaposvari KK - Atomeromu SE
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">PHILIPPINES MPBL</span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/xEUBMms+WwIJr5MTS8p4fQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Caloocan Batang Kankaloo - Valenzuela Workhorses
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/odRlp%2F1eVES6RBVNHrkGxA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ilagan Isabela Cowboys - Quezon City MG Cars
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/gxmbB8YBmGoVZoCEh%2F2bMQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Zamboanga Master Sardines - Cebu Greats
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          POLAND BASKET LIGA - QUARTER-FINALS
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/0BrggLhd+F%2F2EAgPEsZJQA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Dziki Warshawa - Trefl Sopot
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/wJldutRmydzkDEOlI1E+sQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              MKS Dabrowa Gornicza - Legia Warszawa
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITALY SERIE A2 - PLAY OUT -FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/lxvd+%2Fc3H9ofpXLW1yfuDA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tecno Switch Ruvo Di Puglia - Roseto Sharks
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          GERMANY BBL - QUARTER-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/Wz8MrKSpJeeILwVbUXZEFA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Alba Berlin - SC RASTA Vechta
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">HUNGARY NB I. A</span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/HT+6mqaMoVGZoJOBHdkCzQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              EGIS Kormend - Zalakeramia-ZTE KK
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/292qR%2FNGERE7wtrjr1PTfg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              KTE-Duna Aszfalt - Nka Universitas Pecs
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/mvXyP6bPc2AWhkUMkycITg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              OSE Lions - Naturtex-SZTE-Szedeak
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SWEDEN Superettan - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/aXGJO7nfDc4Elee8zMTYpw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Eskilstuna BBK - Huddinge Basket
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          NBA CHAMPIONSHIP 2025/2026
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/aoEkvYqvdManfP4HfWMskg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              NBA CHAMPIONSHIP 2025/2026 - WINNER
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">RWANDA BLD2</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/h6NMxEhmU4F5yjtFWLaRAA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Turikumwe Gisimba Memorial Center - Black Thunders
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          USA&nbsp;NBA - PLAY OFFS - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/wHFJqCWErwEVNFqMNr8ejw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Cleveland Cavaliers @ New York Knicks
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          GERMANY Pro A - SEMI-FINALS
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/q+0YvMSyEQWygwRtD8oP4Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kirchheim - GIESSEN 46ers
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/Mmb0dwoic%2FPTWIK5iTzvEw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Phoenix Hagen - Eisbaren Bremerhaven
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          PHILIPPINES Filoil EcoOil Preseason Cup
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/KtsCxh0+LBaTuLRkxONHMw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sscr Stags - SBU Red Lions
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/1vurHnDqC7006zshORRwrA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              UP Fighting Maroons - NU Bulldogs
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LITHUANIA LKL - QUARTER-FINALS
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/%2F4K4zdcU7z++YZ0WWpu%2FGw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Siauliai - Panevezio Lietkabelis
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/Di1SmbpTtb06D0fTUEUvbQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Zalgiris - Jonava</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          KAZAKHSTAN National league - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/D72OPatyoJOAxqNTgN9mxg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              BC Astana - Barsy Atyrau
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">PUERTO RICO BSN</span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/wIEU93WlM3GYE%2FdrZmDyRQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Guaynabo Mets - Santeras De Aguada
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/IldU5d%2FLVV+JXUXDI+wBHA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mayaguez Indios - Osos De Manati
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          VENEZUELA Superliga - QUARTER-FINALS
                        </span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/VEY6CtpGq0mG1gi0cuyOSw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Brillantes del Zulia - Gaiteros del Zulia
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/18FkgDbmdg%2FVspn2K2vd+Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Marinos de Anzoategui - Spartans
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/MFdT8M8durtJPH2J7LDrsw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pioneros Del Avila - Cocodrilos de Caracas
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/+WCHtJccoDx9AuJ4Wa8MEQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Trotamundos - Guaiqueries
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          JORDAN Premier League - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/tE5mw96lEmTzGEIiWADncQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              AL Faisaly - Amman United
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          FRANCE ELITE 2 -SEMI-FINALS
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/hiVeApkh0HcEPiqiPBr%2FMQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Denain ASC Voltaire - Chalons Reims
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/RqaYSVSDFukmUl%2F88FGE6Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Nantes - Stade Rochelais Rupella
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          TURKEY TKBL Women - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/TFKJd7bPdPdmfBUsK85MfQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Turgutlu Belediyespor W - Kirklareli Fen Bilimleri
                              W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          DOMINICAN REPUBLIC LNB
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/t8UMKOJ6B7XdKenFovraWA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Marineros De Puerto Plata - Heroes De Moca
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/wXfmMLqJnpir6iScosu96A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Soles Santo Domingo - Reales de La Vega
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          AUSTRIA SUPERLIGA - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/XVeloq62i2L5K0CAl1XKIA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Gunners Oberwart - BC Hallmann Vienna
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">TURKEY TBL - FINAL</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/ojQT307+113RP4zCEf6fAg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bordo Sportif Rs - Gaziantep Basketbol
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          HUNGARY NB I. A - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/wWlViR2z2FhMBBIQLqh4gQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Szombathelyi - Szolnoki Olaj
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ROMANIA DIVIZIA A - SEMI-FINALS
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/65Thj7ExKhXdEeOt3SGjZQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CS Dinamo Bucuresti - CSM Oradea
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/EvRWMNmzb5oVvR%2FctbUR5w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              U-BT Cluj-Napoca - SCM CSU Craiova
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BULGARIA NBL - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/%2FO91mqdtB+mvL8%2F3OG0Vhw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Rilski Sportist - Lokomotiv Plovdiv
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BELGIUM PRO BASKETBALL LEAGUE - QUARTER-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/thHP2HINvewfRJotDpkP2w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kortrijk Spurs - Hubo Limburg United
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BOSNIA and HERZEGOVINA Prvenstvo BiH
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/llCsJN3rm0zlDuVQ5ChNIw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Borac Banja Luka - Sloboda
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/hVijmDglpCQc%2Ft51xCV%2FKg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kk Jahorina Pale - HKK Siroki
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">POLAND League 2</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/3lOL7QjHERGg2KLqYJLc0Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              PGE Turow Zgorzelec - KKS Tarnowskie Gory
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          FRANCE LNB - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/ki99rdFbH4qu7K3INQ94Vg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Elan Chalon - Nancy
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ARGENTINA La Liga Proximo
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/qU96x+4vVcpb%2FZW25Zb6pg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Obras Sanitarias LDD - Regatas Corrientes LDD
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ISRAEL Liga Leumit - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/+bhvWyDPfrUirQ0bpLAw7A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Otef Darom Bc - Maccabi Ashdod
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ITALY SERIE A2 - QUARTER -FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/3w%2FdAhVKWDDe7arp4SXWAQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Consultinvest Pesaro - Rinascita Rimini
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ARGENTINA LIGA A - QUARTER-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/V0cCahms1Zg7M5eXS3gERg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Quimsa - Instituto de Cordoba
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          BRAZIL Paulista FPB U20
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/oOnRseJU2cKVRqzfo1T+eQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Mogi das cruzes U20 - Santo Andre/Apaba U20
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ISRAEL Liga Leumit - PLAY OUT
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/eJR9ZXXkiAf2lyHQvUN00Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Elitzur Yavne - Maccabi Petah Tikva Elitzur
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/14t3mfycLZSCEu94LYxbFw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maccabi Haifa - Hapoel Migdal Haemek
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/T2g3ajLzddo8UWzYywKRFg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Maccabi Maale Adumim - Ms Safed
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          FINLAND KORISLIIGA - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/jVeSM6HQAMky614Mk0g4%2Fw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Vilpas - Kataja Basket
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">MEXICO CIBACOPA</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/KR4O%2FZlhpZ8Bq9R9w0gMCQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Astros de Jalisco - Pioneros de Los Mochis
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ESTONIA Korvpalli Meistriliiga - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/YL8cYeDSQVHDYuBmFQEOxQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              BC Kalev/Cramo - Tartu Ulikool
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CZECH REPUBLIC NBL - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/ONM8kkTh8gICVIzp+Dl7dQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              BK Opava - CEZ Nymburk
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SLOVAKIA EXTRALIGA - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/isQmnQAGG09tf56yVlX2VA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Slovan Bratislava - BK Levicki Patrioti
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">Testing</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/tRkBrmGUncXaqXNseCEFpQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Test A v Test B</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          URUGUAY LIGA URUGUAYA - SEMI-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/mk3AMTIlA7C5i2Ny60Anfw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CA Penarol - Defensor Sporting
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SWITZERLAND SB League - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/1j38KfrwPwXqf8Ibt8kw9w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fribourg Olympic - Les Lions de Geneve
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CROATIA PREMIJER LIGA - QUARTER-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/+ayQKmeajTJejJ4R+CH%2FRQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Cibona Vip - Dubrava Zagreb
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CROATIA Premijer Liga Women - FINAL
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/0nWVa1TJdlZL5Y89v2zFLA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Brod na Savi W - ZKK Sibenik W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">USA WNBA</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/dtfYb1AOq8UTIlz7%2Fo63AQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Phoenix Mercury W - Toronto Tempo W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          SERBIA SUPERLEAGUE - QUARTER-FINALS
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/%2Fc+BohE+k+EfApXiDXod7A==/GNVgzCtsMUkecaTiw9ivjA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              KK Borac Cacak - KK Spartak Subotica
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport18">
                    <i className="d-icon icon-18" />
                    <span className="sport-name ifTooltip">Volleyball</span>
                    <span>(14)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">CAMBODIA Techo League</span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/TBRvQryXXanjzvwVnJNoPA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ministry Of Interior - Bodyguard Headquaters
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/+ZAlYp+MDmaizp8mlL3YUA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Svay Rieng Municipal Police - Phnom Penh Police
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/OplU1BIDNXK7yxiL6aUcxw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Visakha - Preah Sihanouk Provincial Police
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CZECH REPUBLIC Regional League Women
                        </span>
                        <span> (4)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/TwNAZild4jJe+Tf5nRkZRA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Meteor Praha D W - Aritma W
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/ELC4pdGQH7uzKIxScFAd+A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Michle B W - Tatran Stresovice W
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/MmsHqOHlGLYXb2blRiyaUg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sokol Vysocany a W - Sk Meteor Praha B W
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/UJlNICtJYK7op4KIVgs5kA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              VSSK MFF Praha D W - Branik A W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ARGENTINA Superiores Segunda
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/PkTyC9dwwWMwRqAIKbXqQw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Deportivo Sudamerica - Lomas Del Palomar
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/XNOgfUGTBJ73iTOfLa%2FACg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Escuela Incorporada Mariano Moreno - Porteno
                              Atletico Club
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          ARGENTINA Superiores Primera
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/XRmyEwGHYgDUwzG2q2FLMg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Ciudad Voley B - Atletico Defensores de Moreno
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/xPyJSXd+fiKTIFCQ1qXbiw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Club Italiano - GEVP
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/goOBsLlcZuiL89NdTkp%2FHg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Gimnasa y Esgrima La Plata - Defensores De
                              Banfield B
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">LITHUANIA KTML</span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/YrWkxdj3PNo0oyKPQSuCsg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Kauno KTU - Kauno Kolegija
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CZECH REPUBLIC Regional League
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/wEN2Sr3uW+4yxJQHhrtUrg==/D9DQ7Vuo2T5+VRUYfIAXDQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sokol Trebes - Lokomotiv Hradec Kralove
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport59">
                    <i className="d-icon icon-59" />
                    <span className="sport-name ifTooltip">Snooker</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport19">
                    <i className="d-icon icon-19" />
                    <span className="sport-name ifTooltip">Ice Hockey</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport11">
                    <i className="d-icon icon-11" />
                    <span className="sport-name ifTooltip">E Games</span>
                    <span>(22)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          DOTA 2 -DREAM LEAGUE (EUROPE)-PLAY OFFS
                        </span>
                        <span> (3)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/ApOHpTQQtTGBsUjwPns5eA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Natus Vincere - Aurora Gaming
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/907kZfPvFeNovYygXQkmPg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Parivision - Team Liquid
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/SpHlmj1UQdJtVILnN6aSaQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Team Spirit - Betboom Team
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          COUNTER - STRIKE Asia Championships (China)
                        </span>
                        <span> (8)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/NrfiYkc4yVPVhq67sMGyYA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">3DMAX - MIBR</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/86IJoga5n%2FTpPKaCoxIYHQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              B8 Esports - Ninjas In Pyjamas
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/pEuWZzHnivxBM2S6BEq+vQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Legacy - NRG Esports
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/qK%2FyEko42+AkCpEnwM4xZw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">Mouz - Tyloo</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/KDerUe9agE19Wl7gzz4CEA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">paiN Gaming - M80</span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/XrCk7x%2FXUqCkx0z8%2FKOidw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Parivision - Team Liquid
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/sE37xkV9hj0edBN5rgnr7w=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Team Falcons - Bc.Game
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/sHH3sV0wSkvmbnhGUm0cjQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Themongolz - Lynn Vision
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS - LCK (South Korea)
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/Lft9lzmxRm5vML1TQrSS3A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Nongshim Red Force - KT Rolster
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/w3iQ8DypLXzEiz0VupybGA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">T1 - DRX</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS - Esports World Cup(SOUTH KOREA)
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/4A5UMGug3p+asUYnlYHqKg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Bnk Fearx - Nongshim Red Force
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/7U+aTeK24BYYyuwQcqi1EQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hanwha Life Esports - Hanjin Brion
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS - TCL (TURKEY)
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/tru3umE8H3hCTB4ed7bZ6g=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Pcific Esports - Bushido Wildcats
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/aw4Vj6S+%2FkfbayrVcf3zmA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Su Esports - Boostgate Esports
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS - LES (Spain)
                        </span>
                        <span> (2)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/zLiTcLwvgS4kPGlBRDJ23A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Barca eSports - Los Heretics Academy
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/194kdx21Gg9jhcuQJW%2FpCQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Lua Gaming - Ub Alma Mater
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS - PRIME LEAGUE (GERMANY)
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/kQcY4RFZVeVhlUSwnD2o0Q=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Team Orange - EW EINFACH E-SPORTS
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS - LFL (France)
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/IfoGkQ1hfzv6wnldIvMSGQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Tln Pirates - Karmine Corp Blue
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          LEAGUE OF LEGENDS ESPORTS WORLD CUP( AUS and OCEANIA
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/Epv0oZEJe1SyR+AgATTDGg==/Vs8t7YvSCraGERXMmXhtGQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Fukuoka SoftBank Hawks gaming - GAM Esports
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport9">
                    <i className="d-icon icon-9" />
                    <span className="sport-name ifTooltip">Futsal</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport39">
                    <i className="d-icon icon-39" />
                    <span className="sport-name ifTooltip">Handball</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport66">
                    <i className="d-icon icon-66" />
                    <span className="sport-name ifTooltip">Kabaddi</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport5">
                    <i className="d-icon icon-5" />
                    <span className="sport-name ifTooltip">Golf</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport55">
                    <i className="d-icon icon-55" />
                    <span className="sport-name ifTooltip">Rugby League</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport6">
                    <i className="d-icon icon-6" />
                    <span className="sport-name ifTooltip">Boxing</span>
                    <span>(5)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">Boxing Matches</span>
                        <span> (5)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZLco2OT7Iwna70zVsOpP8A==/jKlkQqWvz%2Frp%2Fa%2FhIm6Qqw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Frank Sanchez v Richard Torrez Jr
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZLco2OT7Iwna70zVsOpP8A==/VMrNQimFcZ5KPH45QttcRg=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Hamzah Sheeraz v Alem Begic
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZLco2OT7Iwna70zVsOpP8A==/CWN5hykLgg1dc8TYmrdBDw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Jack Catterall v Shakhram Giyasov
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZLco2OT7Iwna70zVsOpP8A==/+fW5ISyO3EHfN7by9DaQMA=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Oleksandr Usyk v Rico Verhoeven
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/ZLco2OT7Iwna70zVsOpP8A==/9eqolTTfsJtzSQ354Lf%2FoQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Robin Sirwan Safar v Yamil Alberto Perlta
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport7">
                    <i className="d-icon icon-7" />
                    <span className="sport-name ifTooltip">
                      Beach Volleyball
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport3">
                    <i className="d-icon icon-3" />
                    <span className="sport-name ifTooltip">
                      Mixed Martial Arts
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport16">
                    <i className="d-icon icon-16" />
                    <span className="sport-name ifTooltip">MotoGP</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport17">
                    <i className="d-icon icon-17" />
                    <span className="sport-name ifTooltip">Chess</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport29">
                    <i className="d-icon icon-29" />
                    <span className="sport-name ifTooltip">Cycling</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport32">
                    <i className="d-icon icon-32" />
                    <span className="sport-name ifTooltip">Motorbikes</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport33">
                    <i className="d-icon icon-33" />
                    <span className="sport-name ifTooltip">Athletics</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport35">
                    <i className="d-icon icon-35" />
                    <span className="sport-name ifTooltip">Basketball 3X3</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport37">
                    <i className="d-icon icon-37" />
                    <span className="sport-name ifTooltip">Sumo</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport38">
                    <i className="d-icon icon-38" />
                    <span className="sport-name ifTooltip">Virtual sports</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport52">
                    <i className="d-icon icon-52" />
                    <span className="sport-name ifTooltip">Motor Sports</span>
                    <span>(1)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">
                          CANADIAN GRAND PRIX - 2026
                        </span>
                        <span> (1)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/bguCZX4j3XDr9ofgZ+QPeg==/CLAcZLcabEyCM7ug52Necw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              CANADIAN GRAND PRIX - RACE
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport53">
                    <i className="d-icon icon-53" />
                    <span className="sport-name ifTooltip">Baseball</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport54">
                    <i className="d-icon icon-54" />
                    <span className="sport-name ifTooltip">Rugby Union</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport57">
                    <i className="d-icon icon-57" />
                    <span className="sport-name ifTooltip">Darts</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport58">
                    <i className="d-icon icon-58" />
                    <span className="sport-name ifTooltip">
                      American Football
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport62">
                    <i className="d-icon icon-62" />
                    <span className="sport-name ifTooltip">Soccer</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport64">
                    <i className="d-icon icon-64" />
                    <span className="sport-name ifTooltip">Esports</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item sport67">
                    <i className="d-icon icon-67" />
                    <span className="sport-name ifTooltip">Boat Racing</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className>
                  <a className="dropdown-item dropdown-toggle sport69">
                    <i className="d-icon icon-69" />
                    <span className="sport-name ifTooltip">Wrestling</span>
                    <span>(6)</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-dark">
                      <a className="dropdown-item dropdown-toggle">
                        <span className="ifTooltip">WWE Virtual</span>
                        <span> (6)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="text-dark">
                          <a
                            href="/sport/detail/gsMvoWlUgJOn1jfJtIuLsw==/pRWDMwohUO2heuQyPV+9PQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Batista v Bobby Lashley
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/gsMvoWlUgJOn1jfJtIuLsw==/rY5+VtO50ubYZPZRm8Xmhw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Drew Mcintyre v Cody Rhodes
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/gsMvoWlUgJOn1jfJtIuLsw==/o9M%2FDwquTeQVClocl8pYLQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Randy Orton v Undertaker
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/gsMvoWlUgJOn1jfJtIuLsw==/9pELhYes08Dh4UUyINgOnw=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Rey Mysterio v Aj Styles
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/gsMvoWlUgJOn1jfJtIuLsw==/DDb0Kn50my83a4V03ksy0A=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Rey Mysterio v Sami Zayn
                            </span>
                          </a>
                        </li>
                        <li className="text-dark">
                          <a
                            href="/sport/detail/gsMvoWlUgJOn1jfJtIuLsw==/g82BTBlnld26tWkrfk0qQQ=="
                            className="dropdown-item"
                          >
                            <span className="ifTooltip">
                              Sami Zayn v Drew Mcintyre
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
