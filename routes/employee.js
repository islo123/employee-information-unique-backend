const express = require("express")
const router = express.Router()
const {newEmployee, getAllEmployees, updateEmployee, deleteEmployee} = require("../controllers/employee")


router.route("/").get(getAllEmployees).post(newEmployee)// put ja patch ero on että kun patchin kirjoitetan name : "Nimi" se laita kaiken muun niin kuin oli ja put näyttää vain nimen.
router.route("/:id").patch(updateEmployee).delete(deleteEmployee).put(updateEmployee)



module.exports = router;