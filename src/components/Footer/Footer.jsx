import style from "./Footer.module.css";

function Footer() {
    return (
        <footer>

            <p>{new Date().getFullYear()} DiegoMAF's Portfolio.</p>

            <div className={style.links}>
                    <div className={style.cv}>
                      <a href="">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        <p>Resume</p>
                      </a>
                    </div>
                    <a href="">
                      <i class="fa-brands fa-linkedin-in"></i>        
                    </a>
                    <a href="">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-envelope"></i>
                    </a>
                  </div>
        </footer>
    );
}

export default Footer;