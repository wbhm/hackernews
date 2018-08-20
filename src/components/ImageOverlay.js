import React, { Component } from 'react';

class ImageOverlay extends Component {

    render() {
        const background = this.props.image;
        const styles = {
            image:{
                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)),url(' + background + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: 0,
                paddingTop: '66.64%',
                position: 'relative',
                overflow: 'hidden',
                margin: '10px'
            },
            imageTitle: {
                color: 'white',
                position: 'absolute',
                bottom: '30px',
                left: 0,
                paddingLeft: '25px'
            },
            imageSubtitle: {
                color: 'white',
                position: 'absolute',
                bottom: '10px',
                left: 0,
                paddingLeft: '25px'
            }
        };
        return (
            <div className="image-Container">
                <div className="image" style={styles.image}>
                    <div className="imageTitle" style={styles.imageTitle}>{this.props.title}</div>
                    <div className="imageSubtitle" style={styles.imageSubtitle}>{this.props.subtitle}</div>
                </div>
            </div>
        );
    }
}

export default ImageOverlay;