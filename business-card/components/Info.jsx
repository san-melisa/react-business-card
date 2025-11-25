export default function Info(){
    return(
        <>
            <img src="./src/assets/photo.jpg" alt="profile-photo" />
            <div className="personal-info">
                <h1>Melisa San</h1>
                <h2 className="position">Fullstack Developer</h2>
                <p className="website">github: san-melisa</p>
            </div>
            <div className="ctn-buttons">
                <a href="mailto:melisasannn@gmail.com" className="btn email-btn"><i class="fa-solid fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/melisa-san/" target="_blank" className="btn linkedin-btn"><i class="fa-brands fa-linkedin"></i>Linkedin</a>
            </div>
        </>
    )
}