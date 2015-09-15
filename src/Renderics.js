var React = require('react');
var Masonry = require('react-masonry-component')(React);

var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({
    render: function () {
    	if (this.props.devices) {
	        var childElements = this.props.devices.map(function(element){
	           return (
	                <div className="image-element-class">
	                    <img src={element.imageSrc} />
						<p><b>{element.name}</b></p>
						<p>{element.type}</p>
	                </div>
	            );
	        });
	    }

	        return (
	            <Masonry
	                className={'my-gallery-class'} // default ''
	                elementType={'ul'} // default 'div'
	                options={masonryOptions} // default {}
	                disableImagesLoaded={false} // default false
	            >
	                {childElements}
	            </Masonry>
	        );
    	}
});

module.exports = Gallery;
