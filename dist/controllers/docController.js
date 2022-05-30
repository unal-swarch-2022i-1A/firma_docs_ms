"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDoc = exports.updateDoc = exports.deleteDoc = exports.getDoc = exports.allDocs = void 0;
var doc_1 = __importDefault(require("./../doc"));
// We'll start with allBooks which will return
// every we have from our database
var allDocs = function (req, res) {
    var docs = doc_1.default.find(function (err, docs) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(docs);
        }
    });
};
exports.allDocs = allDocs;
var getDoc = function (req, res) {
    var doc = doc_1.default.findById(req.params.id, function (err, doc) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(doc);
        }
    });
};
exports.getDoc = getDoc;
var deleteDoc = function (req, res) {
    var doc = doc_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Document");
        }
    });
};
exports.deleteDoc = deleteDoc;
var updateDoc = function (req, res) {
    console.log(req.body);
    var doc = doc_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, doc) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated doc!");
        }
    });
};
exports.updateDoc = updateDoc;
var addDoc = function (req, res) {
    var doc = new doc_1.default(req.body);
    console.log(req.body);
    console.log(doc);
    doc.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(doc);
            res.send(doc);
        }
    });
};
exports.addDoc = addDoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2RvY0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsaURBQTJCO0FBRTNCLDhDQUE4QztBQUM5QyxrQ0FBa0M7QUFDM0IsSUFBSSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxJQUFJLElBQUksR0FBRyxhQUFHLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLElBQVM7UUFDdEMsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSUyxRQUFBLE9BQU8sV0FRaEI7QUFFSyxJQUFJLE1BQU0sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzVDLElBQUksR0FBRyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUTtRQUNyRCxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQVJTLFFBQUEsTUFBTSxVQVFmO0FBRUssSUFBSSxTQUFTLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxJQUFJLEdBQUcsR0FBRyxhQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBQyxHQUFRO1FBQ3JELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFSUyxRQUFBLFNBQVMsYUFRbEI7QUFFSyxJQUFJLFNBQVMsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksR0FBRyxHQUFHLGFBQUcsQ0FBQyxpQkFBaUIsQ0FDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2IsR0FBRyxDQUFDLElBQUksRUFDUixVQUFDLEdBQVEsRUFBRSxHQUFRO1FBQ2YsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDLENBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQWJTLFFBQUEsU0FBUyxhQWFsQjtBQUVLLElBQUksTUFBTSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDZCxJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFiUyxRQUFBLE1BQU0sVUFhZiJ9