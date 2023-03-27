import chai from "chai";
import chaiHttp from "chai-http";
import express from "express";

import { DIContainer, bootstrapDi } from "../src/infrastructure/di-container";
import { getTodoRouter } from "../src/web/routes/todo.router";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Todo routes", () => {
	let app: express.Application;
	let di: DIContainer;

	before(() => {
		di = bootstrapDi();
		app = express();
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use("/", getTodoRouter(di.todoController));
	});

	it("GET / should return all todos", (done) => {
		chai
			.request(app)
			.get("/")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("array");
				done();
			});
	});

	it("GET /todos/:id should return a single todo", (done) => {
		chai
			.request(app)
			.get("/todos/1")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("object");
				expect(res.body).to.have.property("id", 1);
				done();
			});
	});

	it("POST /todos/add should create a new todo", (done) => {
		chai
			.request(app)
			.post("/todos/add")
			.send({ title: "New Todo test", userId: 1 })
			.end((err, res) => {
				expect(res).to.have.status(201);
				expect(res.body).to.be.an("object");
				expect(res.body).to.have.property("_title", "New Todo test");
				expect(res.body).to.have.property("userId", 1);
				done();
			});
	});

	it("PUT /todos/:id should update an existing todo", (done) => {
		chai
			.request(app)
			.put("/todos/1")
			.send({ title: "Updated Todo", userId: 1 })
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("object");
				expect(res.body).to.have.property("id", 1);
				expect(res.body).to.have.property("_title", "Updated Todo");
				done();
			});
	});

	it("DELETE /todos/:id should delete an existing todo", (done) => {
		chai
			.request(app)
			.delete("/todos/40")
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
});
