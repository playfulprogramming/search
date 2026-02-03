import Typesense from "typesense";

const client = new Typesense.Client({
	nodes: [
		{ host: "playful-search.fly.dev", port: 443, protocol: "https" },
	],
	apiKey: process.env.TYPESENSE_ADMIN_API_KEY!,
	connectionTimeoutSeconds: 2,
});

function handleExistsError(e: unknown) {
	if (e && typeof e === "object" && "httpStatus" in e) {
		if (e.httpStatus === 409) {
			console.log("Key already exists.");
			return;
		}
	}
	throw e;
}

console.log("Creating search index deployment key");

await client.keys().create({
	description: "Search index deployment key",
	actions: ["collections:*", "documents:*"],
	collections: ["*"],
	value: process.env.TYPESENSE_WRITE_API_KEY!,
}).catch(handleExistsError);

console.log("Creating public frontend key");

await client.keys().create({
	description: "Frontend search key",
	actions: ["documents:search"],
	collections: ["*"],
	value: process.env.TYPESENSE_PUBLIC_API_KEY!,
}).catch(handleExistsError);

