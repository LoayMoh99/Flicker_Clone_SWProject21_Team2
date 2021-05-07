import './signup.css';
//import arrowlogo from '../../img/dBackground.jpg';

export default function Signup() {
  return (
    <div className="main">

      <div class="header">
        <div class="container">
            <p>flickr</p>
        </div>
      </div>

      <div class="card-container">
        <div class="card">
            <div class="content-container">
                
                <div class="logo">
                    <span class="blue-circle"></span>
                    <span class="Pink-circle"></span>
                </div>

                <h6>Sign up for Flickr</h6>

                <form action="" method="GET">
                
                    <div class="box-one">
                        <input type="text" id="firstname" required/>
                        <label for="firstname">First name</label>
                    </div>
                    
                    <div class="box-one">
                        <input type="text" id="lastname" required/>
                        <label for="lastname">Last name</label>
                    </div>
                    
                    <div class="box-one">
                        <input type="number" id="yourage" required/>
                        <label for="yourage">Your age</label>
                    </div>
                    
                    <div class="box-one">
                        <input type="email" id="email" required/>
                        <label for="email">Email</label>
                    </div>
                    
                    <div class="box-one">
                        <input type="password" id="password" required/>
                        <label for="password">Password</label>
                        <div class="eye-box">
                            <i class="far fa-eye"></i>
                        </div>
                    </div>
                    

                    
                    <div class="signup-button">
                        <button>Sign up</button>
                    </div>

                </form>
                
                <div class="data">
                    <div class="all-info">
                        
                        <div class="agreement-part">
                            <p>By signing up, you agree with Flickr's <a href="#" target="_blank">Terms of Services</a> and <a
                                    href="#">Privacy policy</a></p>
                        </div>
                        
                        <div class="seperator-line">
                            <hr/>
                        </div>
                        
                        <p class="check-member">Already a Flickr member? <a href="#">Log in here</a></p>
                        
                    </div>
                </div>
            </div>
            <footer>
                <div class="select-Lang">
                    <select name="language" id="lang">
                        <option class="eng">English</option>
                        <option class="deutsch">Deutsch</option>
                        <option class="chinese">中国人</option>
                        <option class="spanish">Español</option>
                        <option class="french">français</option>
                        <option class="italian">Italiano</option>
                        <option class="japanese">日本語</option>
                        <option class="portuguese">Português</option>
                        <option class="vietnamese">Tieng viet</option>
                    </select>
                    <span class="custom-arrow">
                        <div class="dashone"></div>
                        <div class="dashtwo"></div>
                    </span>
                </div>
                <div class="HPT-links">
                    <a href="#" class="help">Help</a>
                    <a href="#" class="privacy">Privacy</a>
                    <a href="#" class="tems">Terms</a>
                </div>
            </footer>
          </div>
      </div>
    </div>
    
  );
}
