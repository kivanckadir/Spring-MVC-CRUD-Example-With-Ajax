var data="";
var selectedIndex="";

	$(function(){		
		$("#dialog-confirm" ).dialog({
			  autoOpen:false,
		      resizable: false,
		      height: "auto",
		      width: 400,
		      modal: true,
		      buttons: {
		        "Delete": function() {
		        	delete_(selectedIndex);
		          $(this).dialog("close");
		        },
		        Cancel: function() {
		          $(this).dialog( "close" );
		        }
		     }
		 });
		
		$(function() {
		    $( "#dialog-message" ).dialog({
		      autoOpen: false,
		      modal: true,
		      buttons: {
		        Ok: function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
		  });
		
		openAddPopup = function(){
			$("#dialog-form").dialog("open");
		}
		
		openEditPopup = function(i){
			selectedIndex=i;
			
			firstName2.val(data[selectedIndex].firstName);
			lastName2.val(data[selectedIndex].lastName);
			phoneNumber2.val(data[selectedIndex].phoneNumber);
			
			$("#dialog-edit").dialog("open");
		}
		
		openDeletePopup = function(i) {
			selectedIndex=i;
			openConfirmPopup();
		}
		
		openConfirmPopup = function() {
			$("#dialog-confirm").dialog("open");
		}
		
		openMessagePopup = function() {
			$("#dialog-message").dialog("open");
		}		
		
		//ajax istekleri
		refreshTable = function() {
			$.ajax({
				url: "list",
			    dataType: 'json',
			    success: function(response){
			    	data=response;
			    	$('.tr').remove();
					var no = 1;
					for(i=0; i < data.length; i++){
						$("#contactTable").append('<tr class="tr"> <td>' + no + '</td> <td>' + data[i].firstName + '</td> <td>' + data[i].lastName + '</td> <td>' + data[i].phoneNumber + '</td> <td><input type="button" class="contactAddButton" onclick="openEditPopup('+i+')" value="Edit"></input></td> <td> <input type="button" class="contactAddButton" onclick="openDeletePopup('+i+');" value="Delete"></input></td> </tr>');
						no=no+1;
					}			
				}			
			});
		}
		
		delete_ = function(selectedIndex) {
			$.ajax({
				url: "delete_",
			    dataType: 'json',
			    data: {id:data[selectedIndex].id,
			    	   firstName: data[selectedIndex].firstName,
			    	   lastName: data[selectedIndex].lastName,
			    	   phoneNumber: data[selectedIndex].phoneNumber},
			    success: function(response){
			    	$('.message').html(response.msg);
			    	openMessagePopup();
			    	refreshTable();
			    }
			});
		}
		
		var a="";
		var b="";
		var c="";
		
		add_ = function(a, b, c) {
			$.ajax({
				url: "add_",
			    dataType: 'json',
			    data: {firstName: a,
			    	   lastName: b,
			    	   phoneNumber: c},
			    success: function(response){
			    	$('.message').html(response.msg);
			    	openMessagePopup();
			    	refreshTable();
			    }
			});
		}
		
		edit_ = function(selectedId, a, b, c) {
			$.ajax({
				url: "edit_",
			    dataType: 'json',
			    data: {id: selectedId,
			    	   firstName: a,
			    	   lastName: b,
			    	   phoneNumber: c},
			    success: function(response){
			    	$('.message').html(response.msg);
			    	openMessagePopup();
			    	refreshTable();
			    }
			});
		}

	    var dialog ="";
	    var form = "";
	    var firstName = $( "#firstNameInput" );
	    var lastName = $( "#lastNameInput" );
	    var phoneNumber = $( "#phoneNumberInput" );
	    var allFields = $( [] ).add( firstName ).add( lastName ).add( phoneNumber );
	    var tips = $( ".validateTips" );

	    function updateTips( t ) {
	      tips
	        .text( t )
	        .addClass( "ui-state-highlight" );
	      setTimeout(function() {
	        tips.removeClass( "ui-state-highlight", 1500 );
	      }, 500 );
	    }
	 
	    function checkLength(o, n, min) {
	      if (o.val().length == min) {
	        o.addClass( "ui-state-error" );
	        updateTips( "" + n + " can not be empty.")
	        return false;
	      } else {
	        return true;
	      }
	    }

	    dialog = $( "#dialog-form" ).dialog({
	      autoOpen: false,
	      height: 400,
	      width: 350,
	      modal: true,
	      buttons: {
	        "Save": function() {
				a = firstName.val();
				b = lastName.val();
				c = phoneNumber.val();
				var valid = true;
			    allFields.removeClass( "ui-state-error" );
			      
			    valid = valid && checkLength( firstName, "First Name", 0);
			    valid = valid && checkLength( lastName, "Last Name", 0);
			    valid = valid && checkLength( phoneNumber, "Phone Number", 0);
			 
			    if ( valid ) {
			      dialog.dialog( "close");
			      add_(a,b,c);
			    }
			},
	        Cancel: function() {
	          dialog.dialog( "close" );
	        }
	      },
	      close: function() {
	        form[ 0 ].reset();
	        allFields.removeClass( "ui-state-error" );
	      }
	    });
	 
	    form = dialog.find( "form" ).on( "submit", function( event ) {
	      event.preventDefault();
	    });
	    
	    var dialog2 ="";
	    var form2 = "";
	    var firstName2 = $( "#firstNameInput2" );
	    var lastName2 = $( "#lastNameInput2" );
	    var phoneNumber2 = $( "#phoneNumberInput2" );
	    var allFields2 = $( [] ).add( firstName2 ).add( lastName2 ).add( phoneNumber2 );
	    var tips2 = $( ".validateTips2" );

	    function updateTips2( t ) {
	      tips
	        .text( t )
	        .addClass( "ui-state-highlight" );
	      setTimeout(function() {
	        tips.removeClass( "ui-state-highlight", 1500 );
	      }, 500 );
	    }
	 
	    function checkLength2(o, n, min) {
	      if (o.val().length == min) {
	        o.addClass( "ui-state-error" );
	        updateTips2( "" + n + " can not be empty.")
	        return false;
	      } else {
	        return true;
	      }
	    }

	    dialog2 = $( "#dialog-edit" ).dialog({
	      autoOpen: false,
	      height: 400,
	      width: 350,
	      modal: true,
	      buttons: {
	        "Save": function() {
				a = firstName2.val();
				b = lastName2.val();
				c = phoneNumber2.val();
				var selectedId = data[selectedIndex].id;
				var valid = true;
			    allFields2.removeClass( "ui-state-error" );
			      
			    valid = valid && checkLength2( firstName2, "First Name", 0);
			    valid = valid && checkLength2( lastName2, "Last Name", 0);
			    valid = valid && checkLength2( phoneNumber2, "Phone Number", 0);
			 
			    if ( valid ) {
			      dialog2.dialog( "close");
			      edit_(selectedId, a, b, c);
			    }
			},
	        Cancel: function() {
	          dialog2.dialog( "close" );
	        }
	      },
	      close: function() {
	        form2[ 0 ].reset();
	        allFields2.removeClass( "ui-state-error" );
	      }
	    });
	 
	    form2 = dialog2.find( "form" ).on( "submit", function( event ) {
	      event.preventDefault();
	    });
	    
	  });
	
	  jQuery(function($){
		   $("#phoneNumberInput").mask("(999) 999-9999");
	   });
	  
	  jQuery(function($){
		   $("#phoneNumberInput2").mask("(999) 999-9999");
	   });