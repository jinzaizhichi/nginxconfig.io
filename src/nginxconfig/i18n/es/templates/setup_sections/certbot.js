/*
Copyright 2023 DigitalOcean

This code is licensed under the MIT License.
You may obtain a copy of the License at
https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE or https://mit-license.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Comente las directivas relacionadas con ${common.ssl} en la configuración:`,
    sslOffDeprecationWarning: `This command will add a temporary <code class="slim">ssl off</code> directive to ensure that ${common.ssl} directives are not active. This may cause ${common.nginx} to emit a warning, which is safe to ignore. The directive will be removed once ${certbot} is configured.`, // TODO: translate
    reloadYourNginxServer: `Recargar el ${common.nginx}:`,
    obtainSslCertificatesFromLetsEncrypt: `Obtenga los certificados ${common.ssl} de ${common.letsEncrypt} usando ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Comente las directivas relacionadas con ${common.ssl} en la configuración:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Configure ${certbot} para recargar ${common.nginx} cuando renueve los certificados exitosamente:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot} no es necesario configurarlo para su configuracion de ${common.nginx}.`,
    certbot,
};
