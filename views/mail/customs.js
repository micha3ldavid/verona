
module.exports = function (params) {

var text =
    `
    <div style="background: #fff; font-size: 16px;">
        <header style="background: #000; color: #fff; padding: 15px 30px;">
            <h1 style="margin: 0; text-transform: uppercase;">Juliano</h1>
            <h4 style="margin: 0; text-transform: uppercase;">Custom order request</h4>
        </header>
        <div>
            <div>
                <div>
                    <h3 style="
                        background: #d7d7d7;
                        border: 1px solid #000;
                        border-width: 1px 0;
                        color: #000;
                        margin: 0;
                        text-transform: uppercase;
                        padding: 15px 30px;">Request ID</h3>
                </div>
                <div style="padding: 15px 30px">
                    <p class="margin: 0;">${params.id}<p>
                </div>
            </div>
            <div>
                <div>
                    <h3 style="
                        background: #d7d7d7;
                        border: 1px solid #000;
                        border-width: 1px 0;
                        color: #000;
                        margin: 0;
                        text-transform: uppercase;
                        padding: 15px 30px;">Contact Information</h3>
                </div>
                <div style="padding: 15px 30px;">
                    <dl>
                        <dt style="font-weight: bold; padding: 5px 0;">First Name</dt>
                        <dd style="margin: 0; padding: 0">${params.firstname}</dd>
                        <dt style="font-weight: bold; padding: 5px 0;">Last Name</dt>
                        <dd style="margin: 0; padding: 0">${params.lastname}</dd>
                        <dt style="font-weight: bold; padding: 5px 0;">Email</dt>
                        <dd style="margin: 0; padding: 0">${params.email}</dd>
                    </dl>
                </div>
            </div>
            <div>
                <div>
                    <h3 style="
                        background: #d7d7d7;
                        border: 1px solid #000;
                        border-width: 1px 0;
                        color: #000;
                        margin: 0;
                        text-transform: uppercase;
                        padding: 15px 30px;">Request Details</h3>
                </div>
                <div style="padding: 15px 30px;">
                    <dl>
                        <dt style="font-weight: bold; padding: 5px 0;">Articles</dt>
                        <dd style="margin: 0; padding: 0">${params.type}</dd>
                        <dt style="font-weight: bold; padding: 5px 0;">References</dt>
                        <dd style="margin: 0; padding: 0">${params.ref1}</dd>
                        <dd style="margin: 0; padding: 0">${params.ref2}</dd>
                        <dt style="font-weight: bold; padding: 5px 0;">Comments</dt>
                        <dd style="margin: 0; padding: 0">${params.details}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    `;

    return text;
};
