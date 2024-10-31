/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://CourseCraftAI_owner:OSpVDeNK0n4J@ep-bitter-breeze-a6x2p2v7.us-west-2.aws.neon.tech/CourseCraftAI?sslmode=require',
    }
  };