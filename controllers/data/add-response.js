const { query } = '../db';

// Add a response
async function addResponse(docId, response) {
  try {
    const doc = await query('bonb', async col => col.findOne({ _id: docId }));
    const update = await query('bonb', col => col.updateOne({ _id: docId }, { $set: { [response]: Number(doc[response]) + 1 } }));
    return update;
  } catch (err) {
    return { err };
  }
}

module.exports = addResponse;
