function(doc) {
    if(doc.doc_type == 'Auction' && doc.mode == 'test') {
        var fields=['auctionID', 'dateModified'], data={};
        for (var i in fields) {
            if (doc[fields[i]]) {
                data[fields[i]] = doc[fields[i]]
            }
        }
        emit(doc._local_seq, data);
    }
}
