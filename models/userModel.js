const users=[];
let userId = 1;

export const userModel = {
    createUser: (userData) => {
        const newUser = { id: userId++, ...userData };
        users.push(newUser);
        return newUser;
    },
    getUserById: (id) => {
        return users.find(user => user.id === id);
    },
    getAllUsers: () => {
        return users;
    },
    updateUser: (id, updatedData) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;
        users[userIndex] = { ...users[userIndex], ...updatedData };
        return users[userIndex];
    },
    deleteUser: (id) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;
        const deletedUser = users.splice(userIndex, 1);
        return deletedUser[0];
    },
    findUserByEmail: (email) => {
        return users.find(user => user.email === email);
    },
    findUserByUsername: (username) => {
        return users.find(user => user.username === username);
    }
};