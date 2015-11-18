var tableEditTemplate = _.template('<div class = "table"><%=table_body%></div>'),
	labelInputTemplate = _.template('<div class = "row">' +
							'<div class = "cell"><label><%= name%>: </label></div>' +
							'<div class = "cell"><input type="text" value = "<%=value%>" name = "<%= name%>"></div>' +
						'</div>'),
	groupTableTemplate = _.template('<div><div class = "caption"><%= group_name%></div>' +
								'<div class = "table"></div></div>'),
	personRowTemplate = _.template('<div class = "cell"><%= name%></div>' +
								'<div class = "cell"><%= lastname%></div>' +
								'<div class = "cell"><button value = "preview">Preview</button></div>' +
								'<div class = "cell"><button value = "edit">Edit</button></div>'
							),
	nameValueTemplate = _.template('<div class = "line"><%= name%>: <%= value%></div>'),
	nameAttributeTemplate = _.template('[name="<%= name%>"]'),
	backToListHTML = '<button value="back-to-list">Back to list</button>',
	editButtonHTML = '<button value="edit">Edit</button>',
	saveButtonHtml = '<button value="save">Save</button>',
	previewButtonHtml = '<button value="preview">Preview</button>';



function previewTpl(personJson) {
	var previewHTML = '';

	Object.keys(personJson).forEach(function (key) {
		previewHTML += nameValueTemplate({
				'name': key,
				'value': personJson[key]
			});
	});

	previewHTML += backToListHTML;
	previewHTML += editButtonHTML;
	return '<div>' + previewHTML + '</div>';
}

function editViewTpl(personJson) {
	var editViewHTML = '';

	Object.keys(personJson).forEach(function (key) {
		editViewHTML += labelInputTemplate({
			'name': key,
			'value': personJson[key]
		});
	});

	editViewHTML = tableEditTemplate({
		'table_body': editViewHTML
	});
	editViewHTML += saveButtonHtml;
	editViewHTML += backToListHTML;
	editViewHTML += previewButtonHtml;

	return '<div>' + editViewHTML + '</div>';
}


