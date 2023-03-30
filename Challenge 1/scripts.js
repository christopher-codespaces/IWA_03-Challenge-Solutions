// The code does not work because there are syntax errors in the scripts.js file. Specifically, the import statements should use from instead of form. Additionally, the file path for the scripts should be specified with a .js extension.
import config from './configuration.js';
const message = `© ${config.company} (${config.year})`;
document.querySelector('footer').innerText = message;