import Typesense from "typesense";

const client = new Typesense.Client({
	nodes: [
		{ host: "playful-search.fly.dev", port: 443, protocol: "https" },
	],
	apiKey: process.env.TYPESENSE_ADMIN_API_KEY!,
	connectionTimeoutSeconds: 2,
});

await client.keys().create({
	description: "Search index deployment key",
	actions: ["documents:upsert"],
	collections: ["*"],
	value: process.env.TYPESENSE_WRITE_API_KEY!,
});

await client.keys().create({
	description: "Frontend search key",
	actions: ["documents:search"],
	collections: ["*"],
	value: process.env.TYPESENSE_PUBLIC_API_KEY!,
});

