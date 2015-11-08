var tableEditTemplate = _.template('<div class = "table"><%=table_body%></div>'),
	labelInputTemplate = _.template('<div class = "row">' +
							'<div class = "cell"><label><%= name%>: </label></div>' +
							'<div class = "cell"><input type="text" value = "<%=value%>"></div>' +
						'</div>'),
	groupTableTemplate = _.template('<div class = "caption"><%= group_name%></div>' +
								'<div class = "table"></div>'),
	tableRowTemplate = _.template('<div class = "cell"><%= name%></div>' +
								'<div class = "cell"><%= lastname%></div>' +
								'<div class = "cell"><button value = "preview">Preview</button></div>' +
								'<div class = "cell"><button value = "edit">Edit</button></div>'
							),
	nameValueTemplate = _.template('<div class = "line"><%= name%>: <%= value%></div>');


