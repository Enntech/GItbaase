<script>
const js_thml = () => {
	let code = "";
	code += "<!DOCTYPE html>\n";
	code += "<html lang=\"en\">\n";
	code += "<head>\n";
	code += "\t<style>\n";
	code += "\t\tbody {\n";
	code += "\t\t\tbackground-color: #eee;\n";
	code += "\t\t\tdisplay: flex;\n";
	code += "\t\t\tflex-direction: column;\n";
	code += "\t\t\tmin-height: 100vh;\n";
	code += "\t\t\tcolor: #333;\n";
	code += "\t\t}\n";
	code += "\t\theader {\n";
	code += "\t\t\tbackground-color: #333;\n";
	code += "\t\t\tcolor: #fff;\n";
	code += "\t\t\tpadding: 1rem;\n";
	code += "\t\t\tcounter-reset: calc(2);\n";
	code += "\t\t\tcolor: crimson;\n";
	code += "\t\t}\n";
	code += "\t  \n";
	code += "\t</style>\n";
	code += "\t<title>HTML FORMS</title>\n";
	code += "</head>\n";
	code += "<body>\n";
	code += "\t\n";
	code += "\t<h1>HTML FORMS</h1>\n";
	code += "\n";
	code += "\t<form >\n";
	code += "\t\t<label for=\"username\">enter username:</label>\n";
	code += "\t\t<input type=\"text\" id=\"username\" name=\"username\" placeholder=\"username\" required>\n";
	code += "\t\t<br><br>\n";
	code += "\t\t<label for=\"email\">enter email:</label>\n";
	code += "\t\t<input type=\"email\" id=\"email\" name=\"email\" placeholder=\"your email\" required>\n";
	code += "\t\t<br><br>\n";
	code += "\t\t<label for=\"Password\">Password:</label>\n";
	code += "\t\t<input type=\"Password\" id=\"Password\" name=\"Password\" placeholder=\"choose a password\" required>\n";
	code += "\n";
	code += "\t\t<p>select your age:</p>\n";
	code += "\n";
	code += "\t\t<input type=\"radio\" name=\"age\" value=\"0-25\" id=\"options-1\">\n";
	code += "\t\t<label for=\"option-1\">0-25</label>\n";
	code += "\t\t<input type=\"radio\" name=\"age\" value=\"26-50\" id=\"options-2\">\n";
	code += "\t\t<label for=\"option-1\">26-50</label>\n";
	code += "\t\t<input type=\"radio\" name=\"age\" value=\"51+\" id=\"options-3\">\n";
	code += "\t\t<label for=\"option-1\">51+</label>\n";
	code += "\n";
	code += "\t\t<br><br>\n";
	code += "\n";
	code += "\t\t<label for=\"security question:\"></label>\n";
	code += "\t\t<select name=\"\" id=\"question\">\n";
	code += "\t\t\t<option value=\"q1\">what is your best friend name?</option>\n";
	code += "\t\t\t<option value=\"q2\">what is your father's name?</option>\n";
	code += "\t\t\t<option value=\"q3\">what is your best food?</option>\n";
	code += "\t\t</select>\n";
	code += "\n";
	code += "\t\t<br><br>\n";
	code += "\n";
	code += "\t\t<label for=\"answer\">security question answer:</label>\n";
	code += "\t\t<input type=\"text\" id=\"answer\" name=\"answer\">\n";
	code += "\n";
	code += "\t\t<br><br>\n";
	code += " \n";
	code += "\t\t<label for=\"bio\">your bio:</label><br>\n";
	code += "\t\t<textarea name=\"bio\" id=\"bio\" cols=\"30\" rows=\"10\" placeholder=\"about you.....\"></textarea>\n";
	code += "\n";
	code += "\t\t<br><br>\n";
	code += "\n";
	code += "\t\t<input type=\"submit\" value=\"submit the form\">\n";
	code += "\t</form>\n";
	code += "\n";
	code += "\n";
	code += "\n";
	code += "</body>\n";
	code += "</html>\n";
	return code;
}


document.getElementById("js_html").innerText = js_thml();
document.getElementById("html-text").value = js_thml();
</script>