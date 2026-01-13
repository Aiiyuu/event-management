-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('CONFERENCE', 'MEETUP', 'WORKSHOP', 'WEBINAR', 'SOCIAL');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "category" "EventCategory" NOT NULL DEFAULT 'CONFERENCE';
