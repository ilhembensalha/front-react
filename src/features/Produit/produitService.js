import axios from 'axios'

const API_URL = '/api/produit/'

// Create new goal
const createGoal = async (goalData, token,userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId: `${userId}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token,userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId: `${userId}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token, userId ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId: `${userId}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}
// Create new goal
const updateproduit = async (goalData,goalId, token,userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId: `${userId}`,
    },
  }
  const response = await axios.put(API_URL+ goalId, goalData, config)
  return response.data
}
// Create new goal
const getoneproduit = async (goalId, token,userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId: `${userId}`,
    },
  }

  const response = await axios.get(API_URL+ goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateproduit,
  getoneproduit,
}

export default goalService
