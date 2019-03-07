const getAllBubbles = () => {
    return fetch("http://localhost:3500/api/bubbles").then(resp => {
        if (resp.ok) {
            return resp.json();
        }
    }).then(data => {
        if (!data) {
            return [];
        }
        return data;
    });
};

export default {
  getAllBubbles
};
