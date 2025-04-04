db.transfers.aggregate( [
    {
      $lookup:
        {
          from: "accounts",
          localField: "transfer_id",
          foreignField: "transfers_complete",
          pipeline: [
 
             { $project: { _id: 0, account_id: 1, account_holder: 1 } }
          ],
          as: "account_holder"
      }
  }] )
