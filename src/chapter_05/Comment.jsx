import React from 'react';

const styles = {
    wrapper: {
        margin: 10,
        padding: 10,
        display: "flex",
        flexDiretion: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    nameText: {
        display: "block",
        fontSize: 16,
        fontWeight: "bold",
    },
    commnetText: {
        color: "black",
        fontSize: 16,
    },
}

function Commnet(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160324_46%2Ftoxicnaomi_1458799369888wzGNQ_JPEG%2F%25C5%25E4%25B9%25D9%25BC%25F6%25C1%25B7%25B0%25FC_%25C5%25E4%25B9%25D9%25BE%25C6%25C4%25ED%25BE%25C6%25B8%25AE%25BF%25F2_toba_aquarium_%252837%2529.JPG&type=sc960_832" style={styles.image} />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commnetText}>{props.comment}</span>
            </div>
        </div>
        
    )
}

export default Commnet;
