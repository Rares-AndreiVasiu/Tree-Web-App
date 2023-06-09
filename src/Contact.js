import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <div className="page">
                <h1 className="title-home">Contact Page</h1>
                <p className="paragraph highlight">
                    To keep in touch with the authors of this awesome website, please contact us on:
                    <hr>
                    </hr>
                    <br>
                    </br>
                    <p>
                        Bogdan-Alexandru Oparlescu: bogdan.oparlescu04@e-uvt.ro
                    </p>
                    <p>
                        Rares-Andrei Vasiu: rares.vasiu03@e-uvt.ro
                    </p>
                </p>
            </div>
        );
    }
}

export default ContactPage;