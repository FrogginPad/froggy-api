export const coinflip = () => {
  return { flip: Math.random() >= 0.5 ? "heads" : "tails" };
}

export const coinflipDetail = {
  detail: {
    summary: 'Flips a coin',
    tags: ['Functions']
  }
}