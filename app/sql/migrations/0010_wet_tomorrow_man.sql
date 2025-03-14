ALTER TABLE "teams" RENAME TO "team";--> statement-breakpoint
ALTER TABLE "team" DROP CONSTRAINT "team_size_check";--> statement-breakpoint
ALTER TABLE "team" DROP CONSTRAINT "equity_split_check";--> statement-breakpoint
ALTER TABLE "team" DROP CONSTRAINT "product_description_check";--> statement-breakpoint
ALTER TABLE "team" DROP CONSTRAINT "teams_team_leader_id_profiles_profile_id_fk";
--> statement-breakpoint
ALTER TABLE "team" DROP COLUMN "team_leader_id";--> statement-breakpoint
ALTER TABLE "team" ADD CONSTRAINT "team_size_check" CHECK ("team"."team_size" BETWEEN 1 AND 100);--> statement-breakpoint
ALTER TABLE "team" ADD CONSTRAINT "equity_split_check" CHECK ("team"."equity_split" BETWEEN 1 AND 100);--> statement-breakpoint
ALTER TABLE "team" ADD CONSTRAINT "product_description_check" CHECK (LENGTH("team"."product_description") <= 200);