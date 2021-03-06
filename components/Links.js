import Button from 'react-bootstrap/Button';

const Links = () => (
    <>
        <img src="https://image.flaticon.com/icons/svg/25/25231.svg"
            height="180"
            width="180px" />
        <br />
        <br />
        <div id="btn-1">
            <Button variant="primary" href="https://github.com/thebigdeal916" id="btn-1">GitHub</Button>
        </div>
        <br />
        <img src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"
            height="180"
            width="180px" />
        <br />
        <br />
        <div id="btn-1">
            <Button variant="primary" href="https://www.linkedin.com/in/nick-adams-052093199/" id="btn-2">Linkedin</Button>
        </div>
        <style jsx>
            {`
            #btn-1 {
                margin-left: 45px;
            }

            #btn-2 {
                margin-left: 40px;
            }

            `}
        </style>
    </>

)

export default Links;