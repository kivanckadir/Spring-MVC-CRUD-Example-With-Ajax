<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<title>Infonal</title>

<link type="text/css" rel="stylesheet"
	href="<c:url value="resources/css/main.css" />" />
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://co.4.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="resources/js/mask.js"></script>
<script src="resources/js/main.js"></script>

<style>
label, input {
	display: block;
}

input.text {
	margin-bottom: 12px;
	width: 95%;
	padding: .4em;
}

h1 {
	font-size: 1.2em;
	margin: .6em 0;
}

.ui-dialog .ui-state-error {
	padding: .3em;
}

.validateTips {
	border: 1px solid transparent;
	padding: 0.3em;
}
</style>

</head>



<body id="body" onload="refreshTable();">
	<div class="topBar">
		<img src="resources/images/main-logo.png">
	</div>

	<div class="content">
		<h1>Contact List</h1>

		<div class="left">
			<table id="contactTable" class="contactTable">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Number</th>
						<th colspan="2">Options</th>
					</tr>
				</thead>
			</table>
		</div>

		<div class="right">
			<button id="contactAddButton" class="contactAddButton"
				onclick="openAddPopup();">Add</button>
		</div>

		<div id="dialog-form" title="Add Contact">
			<p class="validateTips">All form fields are required.</p>
			<form>
				<fieldset>
					<table>
						<tr>
							<td><label for="firstNameInput">First Name:</label></td>
							<td><input type="text" name="firstName" id="firstNameInput"
								class="text ui-widget-content ui-corner-all"></td>
						</tr>
						<tr>
							<td><label for="lastNameInput">Last Name:</label></td>
							<td><input type="text" name="lastName" id="lastNameInput"
								class="text ui-widget-content ui-corner-all"></td>
						</tr>
						<tr>
							<td><label for="phoneNumberInput">Phone Number:</label></td>
							<td><input type="text" name="phoneNumber"
								id="phoneNumberInput"
								class="text ui-widget-content ui-corner-all"></td>
						</tr>
						<!-- Allow form submission with keyboard without duplicating the dialog button -->
						<input type="submit" tabindex="-1"
							style="position: absolute; top: -1000px">
						</tr>
					</table>
				</fieldset>
			</form>
		</div>


		<div id="dialog-edit" title="Edit Contact">
			<p class="validateTips">All form fields are required.</p>
			<form>
				<fieldset>
					<table>
						<tr>
							<td><label for="firstNameInput2">First Name:</label></td>
							<td><input type="text" name="firstName2"
								id="firstNameInput2"
								class="text ui-widget-content ui-corner-all"></td>
						</tr>
						<tr>
							<td><label for="lastNameInput2">Last Name:</label></td>
							<td><input type="text" name="lastName2" id="lastNameInput2"
								class="text ui-widget-content ui-corner-all"></td>
						</tr>
						<tr>
							<td><label for="phoneNumberInput2">Phone Number:</label></td>
							<td><input type="text" name="phoneNumber2"
								id="phoneNumberInput2"
								class="text ui-widget-content ui-corner-all"></td>
						</tr>
						<!-- Allow form submission with keyboard without duplicating the dialog button -->
						<input type="submit" tabindex="-1"
							style="position: absolute; top: -1000px">
						</tr>
					</table>
				</fieldset>
			</form>
		</div>

		<div id="dialog-confirm" title="Delete Contact">
			<p>
				<span class="ui-icon ui-icon-alert"
					style="float: left; margin: 12px 12px 20px 0;"></span>This contact
				will be permanently deleted and cannot be recovered. Are you sure?
			</p>
		</div>

		<div id="dialog-message" title="Message">
			<p class="message">
				<span class="ui-icon ui-icon-circle-check"
					style="float: left; margin: 0 7px 50px 0;"></span>
			</p>
		</div>
	</div>
</body>


</html>