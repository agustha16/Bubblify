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

const getBubbleById = (id) => {
    return fetch("http://localhost:3500/api/bubbles/" + id).then(resp => {
        if (resp.ok) {
            return resp.json();
        }
    }).then(data => {
        if (!data) {
            return {};
        }
        return data;
    });
};

export default {
  getAllBubbles,
  getBubbleById
};
