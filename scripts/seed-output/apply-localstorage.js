/**
 * Optional fallback: paste into DevTools console if auto-hydrate did not run.
 * Prefer: re-run seed, then hard-refresh the app (loads /demo-local-db.json).
 * Generated: 2026-08-25T14:08:07.800Z
 */
(function applyDemoSeedLocalStorage() {
  const data = {
  "dup.db.academicYears": [
    {
      "id": "fd1897ab-0d64-4045-b222-0a90624da950",
      "name": "2025-2026",
      "isCurrent": true,
      "startDate": "2025-04-01",
      "endDate": "2026-03-31",
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.db.classes": [
    {
      "id": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "nameEn": "Hifz Class A",
      "nameUr": "حفظ کلاس اے",
      "code": "SEED-HFZ-A",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "department": "HIFZ",
      "capacity": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "nameEn": "Hifz Class B",
      "nameUr": "حفظ کلاس بی",
      "code": "SEED-HFZ-B",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "department": "HIFZ",
      "capacity": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "nameEn": "Kutub Class A",
      "nameUr": "کتب کلاس اے",
      "code": "SEED-KTB-A",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "department": "KUTUB",
      "capacity": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8fb95662-c090-4406-9e39-602fee514965",
      "nameEn": "Kutub Class B",
      "nameUr": "کتب کلاس بی",
      "code": "SEED-KTB-B",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "department": "KUTUB",
      "capacity": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3a452c93-2076-4c8e-a254-199f42148b51",
      "nameEn": "School Class A",
      "nameUr": "اسکول کلاس اے",
      "code": "SEED-SCH-A",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "department": "SCHOOL",
      "capacity": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "nameEn": "School Class B",
      "nameUr": "اسکول کلاس بی",
      "code": "SEED-SCH-B",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "department": "SCHOOL",
      "capacity": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.db.classLectures": [
    {
      "id": "766da327-2397-4641-89f2-61e55385464e",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Nazira",
      "teacherId": "eebdce65-11d9-4358-9bc8-7bf650101d96",
      "teacherName": "Maulana Chishti HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "97a8e885-76c1-4efa-99c2-b5bfa302e21d",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Hifz Sabaq",
      "teacherId": "be357fad-bfad-4b62-8b8b-8ea52709b433",
      "teacherName": "Qari Ansari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "515b900e-54fd-4b79-bf2e-d3747dd3d8f2",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Sabqi",
      "teacherId": "1c652fda-5a07-4a4b-827c-316dc7684e6e",
      "teacherName": "Hafiz Hashmi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8812256a-61a5-425a-92d4-da4e3c702260",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Manzil",
      "teacherId": "662316c1-e0a7-4ee8-bddb-e739f573091e",
      "teacherName": "Mufti Naqvi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0bfe7e9e-b424-4457-b38d-f97894c3e2f5",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Tajweed",
      "teacherId": "3a627b95-9dc0-461f-9d1c-1fee87449b35",
      "teacherName": "Ustad Bukhari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7786d166-6256-4ffb-b8e8-5312e9f6bc1a",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Tarbiyah",
      "teacherId": "c28a1740-7adb-4304-a0b9-7c3d0ebe237b",
      "teacherName": "Sheikh Gilani HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ad88d4db-cf8d-4fbb-8703-973a6f26382e",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Nazira",
      "teacherId": "eebdce65-11d9-4358-9bc8-7bf650101d96",
      "teacherName": "Maulana Chishti HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "2f662e2d-805a-4bfe-8cae-f589a4df2021",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Hifz Sabaq",
      "teacherId": "be357fad-bfad-4b62-8b8b-8ea52709b433",
      "teacherName": "Qari Ansari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "17a68a01-b761-4b30-8b63-04101f658f49",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Sabqi",
      "teacherId": "1c652fda-5a07-4a4b-827c-316dc7684e6e",
      "teacherName": "Hafiz Hashmi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "27389e55-23f6-485b-872e-e1b38e8d099e",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Manzil",
      "teacherId": "662316c1-e0a7-4ee8-bddb-e739f573091e",
      "teacherName": "Mufti Naqvi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ac14b3fb-ff01-402a-b570-a4bdc8ec5dc5",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Tajweed",
      "teacherId": "3a627b95-9dc0-461f-9d1c-1fee87449b35",
      "teacherName": "Ustad Bukhari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ac679bb8-9b88-45fe-8b73-09790c27cc65",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Tarbiyah",
      "teacherId": "c28a1740-7adb-4304-a0b9-7c3d0ebe237b",
      "teacherName": "Sheikh Gilani HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "398627af-a5d0-4fc0-8982-8371ba243300",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Nahw",
      "teacherId": "a2eb0702-80d8-4b80-a35c-f38bee87d996",
      "teacherName": "Maulana Ansari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "047aa03b-7ab0-43aa-beb8-4bd2ec4a4b8a",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Sarf",
      "teacherId": "f4ea67b5-38c0-4120-9819-f52ffbb1d765",
      "teacherName": "Qari Hashmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "5c0aeb22-5658-41eb-90b1-2639f6378649",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Fiqh",
      "teacherId": "abf594c9-9e69-4660-8601-7b0217e263c1",
      "teacherName": "Hafiz Naqvi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7719b63d-c45e-4013-9832-76ade8453fc4",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Hadith",
      "teacherId": "15bfbe3f-5cc2-476e-a3aa-4349f6d1d8d2",
      "teacherName": "Mufti Bukhari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "81f1430d-dd81-4968-8fcb-3f541470d51a",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Tafsir",
      "teacherId": "83f40316-0110-497e-94cc-81a03ecab141",
      "teacherName": "Ustad Gilani KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e24256d7-9750-4e10-8fe6-a405f0fce9a0",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Adab",
      "teacherId": "5d6c34f7-f583-4238-a5e9-f23ee1e3b0aa",
      "teacherName": "Sheikh Kazmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "77155500-f93c-4eb9-9683-f2985a7dba20",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Nahw",
      "teacherId": "a2eb0702-80d8-4b80-a35c-f38bee87d996",
      "teacherName": "Maulana Ansari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3cf51e14-8d65-4e8b-a1f4-70de2e5576a5",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Sarf",
      "teacherId": "f4ea67b5-38c0-4120-9819-f52ffbb1d765",
      "teacherName": "Qari Hashmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "da86fca2-f2f7-4e69-a9c5-9c7381f09490",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Fiqh",
      "teacherId": "abf594c9-9e69-4660-8601-7b0217e263c1",
      "teacherName": "Hafiz Naqvi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e7f7511e-0260-42ed-89a9-a0838fd9b0d3",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Hadith",
      "teacherId": "15bfbe3f-5cc2-476e-a3aa-4349f6d1d8d2",
      "teacherName": "Mufti Bukhari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fc88b0ea-10bf-47e5-b56f-0bf7b5b2f086",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Tafsir",
      "teacherId": "83f40316-0110-497e-94cc-81a03ecab141",
      "teacherName": "Ustad Gilani KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "b5b570d1-aee1-4099-a462-5088c7454e12",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Adab",
      "teacherId": "5d6c34f7-f583-4238-a5e9-f23ee1e3b0aa",
      "teacherName": "Sheikh Kazmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "99d92615-82ca-495f-ae75-58ee95555575",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Mathematics",
      "teacherId": "52e1878d-4c98-4730-865a-e55ef7707c4b",
      "teacherName": "Maulana Hashmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d0076231-77ae-4b82-93a4-3f1e023056db",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "English",
      "teacherId": "ed383073-2a8a-4ddc-99bd-45482d0431b1",
      "teacherName": "Qari Naqvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "33595b2c-5987-42f9-a3d5-c2a5cf786555",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Urdu",
      "teacherId": "89876694-f45b-4656-b7d4-d98e06327874",
      "teacherName": "Hafiz Bukhari SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "539727d1-a30c-48d2-9b6f-211898f71d22",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Science",
      "teacherId": "088dde03-134b-4768-86d7-30455d6a136d",
      "teacherName": "Mufti Gilani SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fa21896e-b746-45f9-a32d-ab1e123618a4",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Islamiyat",
      "teacherId": "5136c981-b454-44bc-92f1-c52e7e27b58c",
      "teacherName": "Ustad Kazmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f76c0ac8-2c17-4b77-86c8-46534bec61de",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Pakistan Studies",
      "teacherId": "42511a30-f406-4d45-8251-c1cb60472600",
      "teacherName": "Sheikh Razvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4ae85cfc-4645-437e-bb2c-e934d7a59311",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Mathematics",
      "teacherId": "52e1878d-4c98-4730-865a-e55ef7707c4b",
      "teacherName": "Maulana Hashmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fb120f2e-7441-48af-91bd-59a80e81192d",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "English",
      "teacherId": "ed383073-2a8a-4ddc-99bd-45482d0431b1",
      "teacherName": "Qari Naqvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d150b639-b35a-4f70-963f-4f0712939c85",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Urdu",
      "teacherId": "89876694-f45b-4656-b7d4-d98e06327874",
      "teacherName": "Hafiz Bukhari SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "9120e450-6bd1-4d49-a5ca-c6c3d9c58e3b",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Science",
      "teacherId": "088dde03-134b-4768-86d7-30455d6a136d",
      "teacherName": "Mufti Gilani SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "381123f6-e01a-4d85-aadf-3159915cb2d5",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Islamiyat",
      "teacherId": "5136c981-b454-44bc-92f1-c52e7e27b58c",
      "teacherName": "Ustad Kazmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "1aadcb32-8aab-4fa5-9191-6705a4019332",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Pakistan Studies",
      "teacherId": "42511a30-f406-4d45-8251-c1cb60472600",
      "teacherName": "Sheikh Razvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.db.enrollments": [
    {
      "id": "29a0dad7-69fb-4324-8d16-36526262210c",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "94aef0d8-15d6-41ae-b43d-2ff5457b00f7",
      "fullName": "Hassan HIFZ 001",
      "fatherName": "Abdul",
      "registrationNumber": "SEED-HIFZ-R001",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "5d711ff8-9bee-4ca4-b84d-26667c1a6a87",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5a850928-33b3-4f17-9823-1f0431515d00",
      "fullName": "Usman HIFZ 002",
      "fatherName": "Ghulam",
      "registrationNumber": "SEED-HIFZ-R002",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fca231cd-9069-4ef2-9811-fb79c1b82cc9",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "00cba633-0bb5-4be4-8754-075bc7bdd6d0",
      "fullName": "Bilal HIFZ 003",
      "fatherName": "Saeed",
      "registrationNumber": "SEED-HIFZ-R003",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7d646acd-c838-4515-ab93-05a35abc8524",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "9718f572-464d-4907-9bb2-e91895961448",
      "fullName": "Yusuf HIFZ 004",
      "fatherName": "Rashid",
      "registrationNumber": "SEED-HIFZ-R004",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0f287a76-3278-4ab1-81ba-81d3389eed52",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5f622cff-d9ef-4fb0-82a1-94a42b483b9f",
      "fullName": "Hamza HIFZ 005",
      "fatherName": "Nadeem",
      "registrationNumber": "SEED-HIFZ-R005",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f1564b01-d38c-4f83-be92-5a3a7c750b4e",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "8bf67e22-8442-4c8e-ba9a-52fec7ddf618",
      "fullName": "Omar HIFZ 006",
      "fatherName": "Javed",
      "registrationNumber": "SEED-HIFZ-R006",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "44d17919-06fe-406f-9d0e-16db38230457",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "cab0fad2-3606-4640-88aa-e5bd83a12227",
      "fullName": "Ibrahim HIFZ 007",
      "fatherName": "Asif",
      "registrationNumber": "SEED-HIFZ-R007",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "acd894a6-a7be-4c61-a7e4-47b7aa66fbba",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "13b2e54e-4240-4308-9543-263c229e01dd",
      "fullName": "Zain HIFZ 008",
      "fatherName": "Khalid",
      "registrationNumber": "SEED-HIFZ-R008",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e3b01a1b-5179-4548-b56e-aff6b1eaf84a",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "078253e0-6098-405d-ab1e-9cde70357814",
      "fullName": "Ali HIFZ 009",
      "fatherName": "Shahid",
      "registrationNumber": "SEED-HIFZ-R009",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7b10914d-de43-4615-9a2a-aa2a5b59b4f4",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f9f16c78-e325-42d7-aa95-7f3745cf499a",
      "fullName": "Saad HIFZ 010",
      "fatherName": "Akram",
      "registrationNumber": "SEED-HIFZ-R010",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "371b7015-c6f5-4a49-b252-b9c34093e2bd",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "4a747fd4-f5ad-4c59-985b-ef0e352f5168",
      "fullName": "Fahad HIFZ 011",
      "fatherName": "Anwar",
      "registrationNumber": "SEED-HIFZ-R011",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "67e667e6-31c3-442e-b064-26cb6c3544be",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "08ced9a7-d7e6-4195-a87d-47a450ecba34",
      "fullName": "Tariq HIFZ 012",
      "fatherName": "Bashir",
      "registrationNumber": "SEED-HIFZ-R012",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "73299e93-be86-4845-b846-d7ca7ed70747",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "15fbb584-a2ca-4f8e-999d-ae6d1d8353c6",
      "fullName": "Imran HIFZ 013",
      "fatherName": "Latif",
      "registrationNumber": "SEED-HIFZ-R013",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "adec1fdd-21ba-4499-9b5a-c65cb13085ee",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "90496625-ad1f-4530-800e-7f468cef55a5",
      "fullName": "Naveed HIFZ 014",
      "fatherName": "Majeed",
      "registrationNumber": "SEED-HIFZ-R014",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "da8ca12a-cde3-41be-bf01-b49023687c70",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "a10dab35-5fbf-4e8c-9c5b-9debb1ae3ea9",
      "fullName": "Kashif HIFZ 015",
      "fatherName": "Qasim",
      "registrationNumber": "SEED-HIFZ-R015",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "731d9c9f-8be5-4c58-9ee3-a9b7077e9841",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "89bfba3c-e491-4e62-af7f-7130653bf48b",
      "fullName": "Adnan HIFZ 016",
      "fatherName": "Rafiq",
      "registrationNumber": "SEED-HIFZ-R016",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7bf60ff5-ff2d-492a-88d7-8aa9642e5bd3",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d371a310-d075-463a-8762-7672fa3704bf",
      "fullName": "Farhan HIFZ 017",
      "fatherName": "Saleem",
      "registrationNumber": "SEED-HIFZ-R017",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "6d9c8bc5-9a7e-4452-81da-f7920bdfa3d2",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "cc8b9ae2-68fc-4d89-ae1e-976b81cc75d2",
      "fullName": "Waleed HIFZ 018",
      "fatherName": "Tahir",
      "registrationNumber": "SEED-HIFZ-R018",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ab309128-ee5e-4258-a888-bcae5acd1737",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "2fd7d405-6dce-47ed-baef-ae0260915bdb",
      "fullName": "Rayyan HIFZ 019",
      "fatherName": "Zahid",
      "registrationNumber": "SEED-HIFZ-R019",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "a8846ebc-1e49-4fe0-99c8-6ddd563ee817",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "7aedf28d-ad52-40f8-8208-dc3c1b1fc8a5",
      "fullName": "Suleman HIFZ 020",
      "fatherName": "Arshad",
      "registrationNumber": "SEED-HIFZ-R020",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "231aa226-65d1-4060-8871-1de87b24b4a9",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "596e1032-f528-4ed3-b145-bc648cd1d982",
      "fullName": "Haroon HIFZ 021",
      "fatherName": "Faisal",
      "registrationNumber": "SEED-HIFZ-R021",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "59b5a5e9-254c-44c2-ace3-082643455145",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5c6492bf-e3f4-42e8-9879-f44bed6acb46",
      "fullName": "Junaid HIFZ 022",
      "fatherName": "Hameed",
      "registrationNumber": "SEED-HIFZ-R022",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "29c2b91d-405e-4d48-8e81-1575d5212b08",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d3384036-5492-44be-8bc7-788f6361330c",
      "fullName": "Danish HIFZ 023",
      "fatherName": "Iqbal",
      "registrationNumber": "SEED-HIFZ-R023",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "90412482-938c-4c4d-bf37-99875d85f5f3",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "bf8bc63c-7471-4de0-b0c7-8c2246dc2125",
      "fullName": "Ayaan HIFZ 024",
      "fatherName": "Younis",
      "registrationNumber": "SEED-HIFZ-R024",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "57581551-5a7e-40b3-a0e5-c588c711f02d",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6fae17b2-a69b-4148-b433-6206ea2b3ec8",
      "fullName": "Ahmed HIFZ 025",
      "fatherName": "Muhammad",
      "registrationNumber": "SEED-HIFZ-R025",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "03611d94-c2e7-4300-964a-d333e7de3944",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5ce11207-388e-46ba-99d2-74871ab6f29a",
      "fullName": "Usman HIFZ 026",
      "fatherName": "Rashid",
      "registrationNumber": "SEED-HIFZ-R026",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "183e9129-09e6-49aa-81bc-60c59a5b4dc6",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d98850e8-3ed1-4022-a92a-b8aebf602282",
      "fullName": "Bilal HIFZ 027",
      "fatherName": "Nadeem",
      "registrationNumber": "SEED-HIFZ-R027",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8d3ad822-82b3-4e93-8ec2-a87535f2e3d8",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "854e3e6d-12f6-4b8c-93d4-758a539c3cfe",
      "fullName": "Yusuf HIFZ 028",
      "fatherName": "Javed",
      "registrationNumber": "SEED-HIFZ-R028",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "780cb8a6-2042-40f9-a91a-d59260919dec",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "b49c3dba-81e9-4a6b-8dac-8e7e1d2b653e",
      "fullName": "Hamza HIFZ 029",
      "fatherName": "Asif",
      "registrationNumber": "SEED-HIFZ-R029",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "36162473-9f61-4b33-91c8-42330c8400a0",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "84f9e3f8-b298-4682-a549-9f4986cd8d37",
      "fullName": "Omar HIFZ 030",
      "fatherName": "Khalid",
      "registrationNumber": "SEED-HIFZ-R030",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "b20f6e07-9720-4a5f-a250-363b60462b2b",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "788d21bb-9031-40cf-87c7-1147e8d6af49",
      "fullName": "Ibrahim HIFZ 031",
      "fatherName": "Shahid",
      "registrationNumber": "SEED-HIFZ-R031",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "74c13252-ccdc-45d4-ba8f-762b02a9031d",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "a21ef064-a9cb-4baf-b7d7-a3613db2a7b4",
      "fullName": "Zain HIFZ 032",
      "fatherName": "Akram",
      "registrationNumber": "SEED-HIFZ-R032",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c1a80d70-a6e8-4e84-b9c0-5df0733a2372",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d748c119-eef1-4289-bd08-6e4e911c9df3",
      "fullName": "Ali HIFZ 033",
      "fatherName": "Anwar",
      "registrationNumber": "SEED-HIFZ-R033",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "223ad865-b9c3-4328-adeb-97902737ea5a",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "499a9559-ea78-4eee-acb4-79b9b480f4a4",
      "fullName": "Saad HIFZ 034",
      "fatherName": "Bashir",
      "registrationNumber": "SEED-HIFZ-R034",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "6f2d0b7e-c35b-47af-998e-ca2d6ed676a7",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "68d3f13f-27ed-4390-b93c-fac0b7a26ff2",
      "fullName": "Fahad HIFZ 035",
      "fatherName": "Latif",
      "registrationNumber": "SEED-HIFZ-R035",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "90dd9d11-18fa-4d8e-9907-a1c41e27fe07",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "23ad9ac2-94f2-487f-8fe4-107d695cb8d5",
      "fullName": "Tariq HIFZ 036",
      "fatherName": "Majeed",
      "registrationNumber": "SEED-HIFZ-R036",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "58793cff-20c2-4d8d-9e48-4a63dc5c6937",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "b6e50d8a-02d5-4859-8db0-63d741c2deca",
      "fullName": "Imran HIFZ 037",
      "fatherName": "Qasim",
      "registrationNumber": "SEED-HIFZ-R037",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "97a75c44-69eb-46de-838d-46b3c6bacd4a",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "0811f0d7-6182-413a-bd19-e66f7ccbb97c",
      "fullName": "Naveed HIFZ 038",
      "fatherName": "Rafiq",
      "registrationNumber": "SEED-HIFZ-R038",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "33808e20-5904-4a63-bdeb-5a0d38e2d1a6",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "b4bf3d09-c888-4336-a6c1-8c36fa279ac0",
      "fullName": "Kashif HIFZ 039",
      "fatherName": "Saleem",
      "registrationNumber": "SEED-HIFZ-R039",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "254f6942-53bb-4589-bd76-846eeec1dc01",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "aa5c3115-2c72-4ca6-ace2-74346a935d5a",
      "fullName": "Adnan HIFZ 040",
      "fatherName": "Tahir",
      "registrationNumber": "SEED-HIFZ-R040",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3f40e108-e737-4644-a059-7241e2970624",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f4c618de-4240-4ced-8447-919f8748472a",
      "fullName": "Farhan HIFZ 041",
      "fatherName": "Zahid",
      "registrationNumber": "SEED-HIFZ-R041",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "1953d335-2ece-4e58-9e01-dd07984b5c13",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "ce56cb6f-5232-471c-8ac7-b66ad69b0c40",
      "fullName": "Waleed HIFZ 042",
      "fatherName": "Arshad",
      "registrationNumber": "SEED-HIFZ-R042",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "05817798-bc62-40cb-997b-f129bf0aa027",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "cf5f2701-ae17-466f-a393-078bf442ab08",
      "fullName": "Rayyan HIFZ 043",
      "fatherName": "Faisal",
      "registrationNumber": "SEED-HIFZ-R043",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "24cd54bc-dff9-4c75-8e9b-33f37ccece37",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "b3b7bf64-5324-4dcb-af25-c907a0d6f2e0",
      "fullName": "Suleman HIFZ 044",
      "fatherName": "Hameed",
      "registrationNumber": "SEED-HIFZ-R044",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "665e5355-b67e-45ea-aecc-969c22d960a7",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "91021933-e0de-4e18-b233-9d9e081ad3a7",
      "fullName": "Haroon HIFZ 045",
      "fatherName": "Iqbal",
      "registrationNumber": "SEED-HIFZ-R045",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0bdf6bfe-041d-4579-975b-03d5ced38085",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "8d21997c-48e2-418f-bf66-8873ae8ac178",
      "fullName": "Junaid HIFZ 046",
      "fatherName": "Younis",
      "registrationNumber": "SEED-HIFZ-R046",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "72937683-b5a1-4833-9d5d-6cfff1983fb3",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "27a05796-6e55-4dab-a577-ad868cfc4d6d",
      "fullName": "Danish HIFZ 047",
      "fatherName": "Muhammad",
      "registrationNumber": "SEED-HIFZ-R047",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "370eb42e-35d1-403d-8d55-898e910d6113",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "3185d8ef-c328-42e1-9bd0-bff5a784daaa",
      "fullName": "Ayaan HIFZ 048",
      "fatherName": "Abdul",
      "registrationNumber": "SEED-HIFZ-R048",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "03e625d9-bb9a-4f11-9fff-2bb64d4a059c",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "83228a5d-7508-4e58-8af7-8af70fef5325",
      "fullName": "Ahmed HIFZ 049",
      "fatherName": "Ghulam",
      "registrationNumber": "SEED-HIFZ-R049",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "dec161a7-e87b-4040-ad3e-8a532f88ee0b",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "36bb7122-eca2-4e75-8793-f9661fc5669c",
      "fullName": "Hassan HIFZ 050",
      "fatherName": "Saeed",
      "registrationNumber": "SEED-HIFZ-R050",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "2d1d2991-4e2d-4b9e-8c97-a16388a9aa87",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6d12464d-ec5a-433b-bff1-301fb9aec268",
      "fullName": "Hassan KUTUB 001",
      "fatherName": "Abdul",
      "registrationNumber": "SEED-KUTUB-R001",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e0e081db-6e20-42ba-b45f-2150cf8b43b7",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "1498cd9a-9c14-487c-9456-31f880cf5555",
      "fullName": "Usman KUTUB 002",
      "fatherName": "Ghulam",
      "registrationNumber": "SEED-KUTUB-R002",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "a5ee8f2f-3e23-4438-ba4e-3a5c8932dd6a",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "14a7a466-df6c-4138-835b-dd6bcab48375",
      "fullName": "Bilal KUTUB 003",
      "fatherName": "Saeed",
      "registrationNumber": "SEED-KUTUB-R003",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "690aca7f-dff6-44a2-b2e9-60e5bd72edda",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "e1371e35-8008-4306-8007-a1baa3a735de",
      "fullName": "Yusuf KUTUB 004",
      "fatherName": "Rashid",
      "registrationNumber": "SEED-KUTUB-R004",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c35bb9fc-24b6-4ded-b9b5-bc5343c061c5",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "897e5e5d-f1f4-4324-9e98-de0375999084",
      "fullName": "Hamza KUTUB 005",
      "fatherName": "Nadeem",
      "registrationNumber": "SEED-KUTUB-R005",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d492e40e-a4ae-4c56-be30-7865ea3dceac",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5cd1b006-5276-4a0f-ae45-8a7af9c870e7",
      "fullName": "Omar KUTUB 006",
      "fatherName": "Javed",
      "registrationNumber": "SEED-KUTUB-R006",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "43ad8f5d-a483-41fc-85f7-40756a14f77c",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "ce83206d-81e1-42de-8a09-5b6b13fcac1e",
      "fullName": "Ibrahim KUTUB 007",
      "fatherName": "Asif",
      "registrationNumber": "SEED-KUTUB-R007",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "22da836c-61c9-47b1-a6a8-3e9f06ef4750",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6b429ae8-00f7-415a-a7ed-6b6ea1cb9bcd",
      "fullName": "Zain KUTUB 008",
      "fatherName": "Khalid",
      "registrationNumber": "SEED-KUTUB-R008",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "028a1013-d8ed-4d49-b59e-071cf7428f16",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "1ea140ac-347e-432a-8527-f7c75c0dbd59",
      "fullName": "Ali KUTUB 009",
      "fatherName": "Shahid",
      "registrationNumber": "SEED-KUTUB-R009",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "2426e840-25ca-48e7-8a2b-85f0bc72002d",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "9175c307-4cf3-4c5c-a2b5-5d2dce4c6eee",
      "fullName": "Saad KUTUB 010",
      "fatherName": "Akram",
      "registrationNumber": "SEED-KUTUB-R010",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "72448215-f237-418e-ac3e-bed10aacc877",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d07e481e-d0a7-4bc5-b581-3be96f5e15ee",
      "fullName": "Fahad KUTUB 011",
      "fatherName": "Anwar",
      "registrationNumber": "SEED-KUTUB-R011",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "36d8a5ca-7b6e-41fc-a2a5-9e74b96a1945",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f89bc136-517f-4814-b17b-a16703bb6b33",
      "fullName": "Tariq KUTUB 012",
      "fatherName": "Bashir",
      "registrationNumber": "SEED-KUTUB-R012",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "73c68de2-b11d-4fba-84f2-52b9ee009b48",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "404266cf-2fa9-410f-9b9b-37c09d1fe3a8",
      "fullName": "Imran KUTUB 013",
      "fatherName": "Latif",
      "registrationNumber": "SEED-KUTUB-R013",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f7a19d37-7f56-4846-a9b9-94ff48f6ef1e",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "97d4a1b8-16bc-4d0d-9508-75020f990614",
      "fullName": "Naveed KUTUB 014",
      "fatherName": "Majeed",
      "registrationNumber": "SEED-KUTUB-R014",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3cfdae19-383e-48eb-a9f4-12da4f4cb402",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "b3a07718-13fd-4155-b634-3998a9757921",
      "fullName": "Kashif KUTUB 015",
      "fatherName": "Qasim",
      "registrationNumber": "SEED-KUTUB-R015",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "5bb76e6f-22f4-4121-a86d-d00f738112c2",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "01042cef-48c4-4b35-ab52-06a7f683cba5",
      "fullName": "Adnan KUTUB 016",
      "fatherName": "Rafiq",
      "registrationNumber": "SEED-KUTUB-R016",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "b3c3c2a0-5fb7-4946-8a77-9dd9c3d42cdd",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "baa21ae9-4514-4ce0-b788-9fffd7453b0e",
      "fullName": "Farhan KUTUB 017",
      "fatherName": "Saleem",
      "registrationNumber": "SEED-KUTUB-R017",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "acd6a84e-3e89-47fd-b002-68e12f349304",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "79cc5b61-6f29-448b-a12d-e6e5aec3725b",
      "fullName": "Waleed KUTUB 018",
      "fatherName": "Tahir",
      "registrationNumber": "SEED-KUTUB-R018",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d184e68a-ec6a-4ac2-a62d-ea75872881b1",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "0a3480bd-bd76-4cfd-a676-9de99768b3c9",
      "fullName": "Rayyan KUTUB 019",
      "fatherName": "Zahid",
      "registrationNumber": "SEED-KUTUB-R019",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "a94328f3-260e-4263-bf25-0ad814d06794",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "c5c2d309-8901-4ac0-a67a-e05a9353da02",
      "fullName": "Suleman KUTUB 020",
      "fatherName": "Arshad",
      "registrationNumber": "SEED-KUTUB-R020",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "9419a741-7478-4fa6-bd4b-e9d7871f8950",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "282396a6-1518-4784-9d12-e9235b4e4803",
      "fullName": "Haroon KUTUB 021",
      "fatherName": "Faisal",
      "registrationNumber": "SEED-KUTUB-R021",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "35b0e9c4-7547-4935-bcc1-3a11a6b6a694",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5092265d-b1ee-4b95-8d07-d06baeb91bef",
      "fullName": "Junaid KUTUB 022",
      "fatherName": "Hameed",
      "registrationNumber": "SEED-KUTUB-R022",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "901b3baf-5a9f-4fd3-9b1e-46d1b7813326",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "465173a7-1667-4f1b-9b35-4cac8409baed",
      "fullName": "Danish KUTUB 023",
      "fatherName": "Iqbal",
      "registrationNumber": "SEED-KUTUB-R023",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "30664ea0-a35e-446f-8524-bb8f7ad86965",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5fd7e611-edd1-469a-b926-b4eae17c4e95",
      "fullName": "Ayaan KUTUB 024",
      "fatherName": "Younis",
      "registrationNumber": "SEED-KUTUB-R024",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d846474a-159f-424c-963e-12f6a8676fed",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "737cecf8-6112-4038-92a8-67bce9d9b2e2",
      "fullName": "Ahmed KUTUB 025",
      "fatherName": "Muhammad",
      "registrationNumber": "SEED-KUTUB-R025",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "308d8071-47d4-422a-bf5f-91dcc61e41e1",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "8a0f394d-8989-4ea9-98a8-012b2b69e3e6",
      "fullName": "Usman KUTUB 026",
      "fatherName": "Rashid",
      "registrationNumber": "SEED-KUTUB-R026",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "2c644235-cf24-47c2-9411-28f7578e6ce7",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "9c7a3342-d4ee-4b6c-ba37-3688f4037af5",
      "fullName": "Bilal KUTUB 027",
      "fatherName": "Nadeem",
      "registrationNumber": "SEED-KUTUB-R027",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ae94802d-0f87-44f6-9092-df517cadc417",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "bd3e77fa-1861-4da9-b835-393eedb035b5",
      "fullName": "Yusuf KUTUB 028",
      "fatherName": "Javed",
      "registrationNumber": "SEED-KUTUB-R028",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "db8a8b16-6b51-4a90-918b-99b30a592e77",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "195d3703-8985-4b17-b1a5-124aa6655371",
      "fullName": "Hamza KUTUB 029",
      "fatherName": "Asif",
      "registrationNumber": "SEED-KUTUB-R029",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "a1597bb4-de0b-486d-a466-c022b0beea02",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "c4c0b526-a858-4b83-914c-d4f4c230e455",
      "fullName": "Omar KUTUB 030",
      "fatherName": "Khalid",
      "registrationNumber": "SEED-KUTUB-R030",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "1c3ee01a-0bb3-45e6-ad95-2be97df9e5c9",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "0aec65e4-89a8-4056-b64b-35d844db0b8c",
      "fullName": "Ibrahim KUTUB 031",
      "fatherName": "Shahid",
      "registrationNumber": "SEED-KUTUB-R031",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c09753a6-f73e-4ef9-9341-e5dc376294d6",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "3b1b1dd7-47f1-4757-843f-689d0d383574",
      "fullName": "Zain KUTUB 032",
      "fatherName": "Akram",
      "registrationNumber": "SEED-KUTUB-R032",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "33eb5058-67dc-461b-9132-bfd7f797ea75",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d00a427e-0123-46b4-8cf7-d4caeacbefa8",
      "fullName": "Ali KUTUB 033",
      "fatherName": "Anwar",
      "registrationNumber": "SEED-KUTUB-R033",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "912e0776-0fb0-4c2e-b1db-3b59cd48ff3a",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "990a4662-fb7f-431a-80bb-47f668671388",
      "fullName": "Saad KUTUB 034",
      "fatherName": "Bashir",
      "registrationNumber": "SEED-KUTUB-R034",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f3984788-e777-45d1-8734-68a46746dcc3",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "cb66fc61-1cf6-4fc3-ae15-2d9b4225e733",
      "fullName": "Fahad KUTUB 035",
      "fatherName": "Latif",
      "registrationNumber": "SEED-KUTUB-R035",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "864a9317-ab1c-4c0e-8e3b-1b6acbe3d824",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "5f4fbe95-cf45-42b4-acb5-c44092a365e2",
      "fullName": "Tariq KUTUB 036",
      "fatherName": "Majeed",
      "registrationNumber": "SEED-KUTUB-R036",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "23e36467-ebe5-40f4-a567-51a5fa9200c3",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "df32fc79-9a89-495a-a0dd-d9ea4e192734",
      "fullName": "Imran KUTUB 037",
      "fatherName": "Qasim",
      "registrationNumber": "SEED-KUTUB-R037",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0415eb68-2ad7-4cd1-9494-0427998377ed",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d75ae8e2-6cd1-489d-9c3c-e23c3a062757",
      "fullName": "Naveed KUTUB 038",
      "fatherName": "Rafiq",
      "registrationNumber": "SEED-KUTUB-R038",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "07743cc0-410e-4832-9c0b-2efe9c0b3556",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "67b6c7d1-a731-41a1-9a7b-a0aa7a9efe0c",
      "fullName": "Kashif KUTUB 039",
      "fatherName": "Saleem",
      "registrationNumber": "SEED-KUTUB-R039",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8d2e7d5d-e405-4222-ba7e-92f05a23ee5a",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "567d753b-3d5a-487f-b0dc-011d6d7c3291",
      "fullName": "Adnan KUTUB 040",
      "fatherName": "Tahir",
      "registrationNumber": "SEED-KUTUB-R040",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "1eee6293-a7e1-4914-971f-fd2e8751d5e5",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "eb543db6-aaea-4d42-b7fd-a3e2d34f636f",
      "fullName": "Farhan KUTUB 041",
      "fatherName": "Zahid",
      "registrationNumber": "SEED-KUTUB-R041",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "741f91e9-4bca-46dc-bca0-0073cbd28f6d",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d9e0d12a-c031-49f8-9967-b5e00cabe234",
      "fullName": "Waleed KUTUB 042",
      "fatherName": "Arshad",
      "registrationNumber": "SEED-KUTUB-R042",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "5a270566-7254-48f0-993a-bc063f9fe705",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "18d67a30-e8be-4dd7-89f1-05872f37f54b",
      "fullName": "Rayyan KUTUB 043",
      "fatherName": "Faisal",
      "registrationNumber": "SEED-KUTUB-R043",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "35a4fd7f-bf05-4ac0-b547-2c5c2f01e670",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "56a1b9b7-8924-428b-b1c3-73dd89231da2",
      "fullName": "Suleman KUTUB 044",
      "fatherName": "Hameed",
      "registrationNumber": "SEED-KUTUB-R044",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f7d570ff-ce7c-4143-aa4f-51617f5b9327",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "554d1bd3-4b59-434c-b313-65c4e8974172",
      "fullName": "Haroon KUTUB 045",
      "fatherName": "Iqbal",
      "registrationNumber": "SEED-KUTUB-R045",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "b320f85e-c56c-43a4-a900-47a73fbd4010",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f05c8afc-87dc-4eb2-877e-6e3f0b793600",
      "fullName": "Junaid KUTUB 046",
      "fatherName": "Younis",
      "registrationNumber": "SEED-KUTUB-R046",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8a855ae8-3c08-4746-a9d7-476b187275f4",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "41a9882d-3595-4064-b070-4971178e1052",
      "fullName": "Danish KUTUB 047",
      "fatherName": "Muhammad",
      "registrationNumber": "SEED-KUTUB-R047",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "30851920-7e9a-4ca3-8acc-7e8eaca0746f",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "aacc84cc-059b-490e-9795-e52c7f24e94d",
      "fullName": "Ayaan KUTUB 048",
      "fatherName": "Abdul",
      "registrationNumber": "SEED-KUTUB-R048",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4695b304-dbe3-4b07-82e9-e9a020048e06",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "e1b52241-45be-4754-b2da-8a1d188a7677",
      "fullName": "Ahmed KUTUB 049",
      "fatherName": "Ghulam",
      "registrationNumber": "SEED-KUTUB-R049",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e32ba567-c08c-478f-b979-4cf3136f5c72",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "c99bf756-17e0-4668-96d2-386490c57dd0",
      "fullName": "Hassan KUTUB 050",
      "fatherName": "Saeed",
      "registrationNumber": "SEED-KUTUB-R050",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "bb3eeb98-f7e6-4119-a3d7-122c267377a3",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "3dcd4c21-bab6-4430-a97a-dff1a6889ac6",
      "fullName": "Hassan SCHOOL 001",
      "fatherName": "Abdul",
      "registrationNumber": "SEED-SCHOOL-R001",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4f8e07c7-3f92-4da3-be57-401783537d5a",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "56342b9b-40e4-40a5-b373-344ded5b418a",
      "fullName": "Usman SCHOOL 002",
      "fatherName": "Ghulam",
      "registrationNumber": "SEED-SCHOOL-R002",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "af99cfb5-42b4-4b55-9ebf-35223dadc22c",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d86eafcc-cb29-4212-8259-9d3bb7ab8233",
      "fullName": "Bilal SCHOOL 003",
      "fatherName": "Saeed",
      "registrationNumber": "SEED-SCHOOL-R003",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f2c65b3b-ff4e-495d-8149-a3d4a88e26d7",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "0811bd90-9b1b-4161-ae99-e6bdef249bf6",
      "fullName": "Yusuf SCHOOL 004",
      "fatherName": "Rashid",
      "registrationNumber": "SEED-SCHOOL-R004",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f99b0cd2-faf1-4a7a-b80a-b171b72c91c7",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "555dd96d-d7e9-46ae-a595-b7a55f2b4555",
      "fullName": "Hamza SCHOOL 005",
      "fatherName": "Nadeem",
      "registrationNumber": "SEED-SCHOOL-R005",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "11840c00-3459-4a28-922e-807999b1a7dc",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6e2aed15-9be0-4c31-8278-a49826859f07",
      "fullName": "Omar SCHOOL 006",
      "fatherName": "Javed",
      "registrationNumber": "SEED-SCHOOL-R006",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "eed6738d-f683-488f-b2fa-0b5b408b5a1d",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "8865acfd-3854-46ee-8c22-9a3ac452bbc8",
      "fullName": "Ibrahim SCHOOL 007",
      "fatherName": "Asif",
      "registrationNumber": "SEED-SCHOOL-R007",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8694e092-da21-4421-bd05-0396ebfc56ec",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "eb51f845-beea-43f8-9240-e1feaa4b6f83",
      "fullName": "Zain SCHOOL 008",
      "fatherName": "Khalid",
      "registrationNumber": "SEED-SCHOOL-R008",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4a581d35-51f2-4252-887e-a87ec521c6b3",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "4999da40-0fc4-48f1-9816-bf1188332e75",
      "fullName": "Ali SCHOOL 009",
      "fatherName": "Shahid",
      "registrationNumber": "SEED-SCHOOL-R009",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "95f5334f-01d1-4aff-aede-14d616783d7f",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "9be4733c-df34-4dd6-b360-20fe05c5ac93",
      "fullName": "Saad SCHOOL 010",
      "fatherName": "Akram",
      "registrationNumber": "SEED-SCHOOL-R010",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "84742b20-9745-48ac-b67a-f03eee9a4c42",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "8e145228-58a4-4d10-8838-a452c8072d3a",
      "fullName": "Fahad SCHOOL 011",
      "fatherName": "Anwar",
      "registrationNumber": "SEED-SCHOOL-R011",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8e0b1d4e-a6c4-40de-aa9b-87f59fc8773e",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "09d668bc-a704-40a2-ac88-48cc60e08004",
      "fullName": "Tariq SCHOOL 012",
      "fatherName": "Bashir",
      "registrationNumber": "SEED-SCHOOL-R012",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "9f1fb1c4-39df-49c5-8d72-7db4bf2a7983",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "38c96735-80b3-4adb-8f63-5af471f36989",
      "fullName": "Imran SCHOOL 013",
      "fatherName": "Latif",
      "registrationNumber": "SEED-SCHOOL-R013",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "deade87e-c528-47e5-a794-82d6b856c094",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "53dc6a03-ac69-4cf8-8557-743332b96868",
      "fullName": "Naveed SCHOOL 014",
      "fatherName": "Majeed",
      "registrationNumber": "SEED-SCHOOL-R014",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4ae7d03e-94c3-4a7e-9c4f-7a065fd29585",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "7deab97e-58d6-4e38-89e5-037d57078290",
      "fullName": "Kashif SCHOOL 015",
      "fatherName": "Qasim",
      "registrationNumber": "SEED-SCHOOL-R015",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c277a671-437e-481a-9bf1-fafe60a61711",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "1868e031-445c-4e9e-8812-cadcfdbf9c45",
      "fullName": "Adnan SCHOOL 016",
      "fatherName": "Rafiq",
      "registrationNumber": "SEED-SCHOOL-R016",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c04bbe83-34ce-40e5-9286-beb1e4ddfd8c",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6ea7331a-f0a6-4be1-8d35-aeed55323f53",
      "fullName": "Farhan SCHOOL 017",
      "fatherName": "Saleem",
      "registrationNumber": "SEED-SCHOOL-R017",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "22e8e916-121c-479a-bcbb-e764e168c173",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "0a4ebe40-f4cd-407d-a154-d66fb546ef7d",
      "fullName": "Waleed SCHOOL 018",
      "fatherName": "Tahir",
      "registrationNumber": "SEED-SCHOOL-R018",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "9858b298-8b04-4932-8ca3-0fc9abc61c6d",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "2cc290b4-3348-4718-b6aa-095c578d528a",
      "fullName": "Rayyan SCHOOL 019",
      "fatherName": "Zahid",
      "registrationNumber": "SEED-SCHOOL-R019",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8f9a68fa-54c3-43f9-afe9-831ebf7d8634",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6a6797b9-ac51-43c6-8ce3-5be7f6106a4b",
      "fullName": "Suleman SCHOOL 020",
      "fatherName": "Arshad",
      "registrationNumber": "SEED-SCHOOL-R020",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c3cd8f73-a8df-4732-a58b-02916f3f03cd",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "47ab29a3-7493-430c-91a8-7f0af336a2b5",
      "fullName": "Haroon SCHOOL 021",
      "fatherName": "Faisal",
      "registrationNumber": "SEED-SCHOOL-R021",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "52eb3a56-bbb2-4edc-b194-84ebc5bb91d0",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "37b65015-8919-4046-95f6-d5279e4d1b9c",
      "fullName": "Junaid SCHOOL 022",
      "fatherName": "Hameed",
      "registrationNumber": "SEED-SCHOOL-R022",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "1e4dea02-0fc8-465a-b8aa-681eff55db59",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "8e0a7a96-e066-44ae-923f-4713a70f02a2",
      "fullName": "Danish SCHOOL 023",
      "fatherName": "Iqbal",
      "registrationNumber": "SEED-SCHOOL-R023",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "332f4427-4dd4-4af5-afff-a7b38fec884d",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "7815ab18-a7a5-47ca-bba5-b4a469c5a762",
      "fullName": "Ayaan SCHOOL 024",
      "fatherName": "Younis",
      "registrationNumber": "SEED-SCHOOL-R024",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "86d12b6e-a65a-412d-aca2-f9e42a13e5fa",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "3fc184db-14c2-4009-abea-60fd82a59934",
      "fullName": "Ahmed SCHOOL 025",
      "fatherName": "Muhammad",
      "registrationNumber": "SEED-SCHOOL-R025",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f4010eda-abd7-4cfc-a018-9be43c4c10fa",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f1eacc8c-97dc-4021-bc1e-5e4bd1ad907d",
      "fullName": "Usman SCHOOL 026",
      "fatherName": "Rashid",
      "registrationNumber": "SEED-SCHOOL-R026",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e4d71b41-9030-47fb-bf67-e173183d3337",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "b621cd7b-d5ce-4b99-abf5-5a73696beece",
      "fullName": "Bilal SCHOOL 027",
      "fatherName": "Nadeem",
      "registrationNumber": "SEED-SCHOOL-R027",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c27e5afd-965c-4b35-b783-055081713ffa",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "540951ca-59b7-4baf-8392-1ed4ce0e9dd0",
      "fullName": "Yusuf SCHOOL 028",
      "fatherName": "Javed",
      "registrationNumber": "SEED-SCHOOL-R028",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "dd48b1ef-9222-4166-be71-008cb3d03c2d",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "7d8d428c-04c3-4a28-99f4-ab53c4d382c0",
      "fullName": "Hamza SCHOOL 029",
      "fatherName": "Asif",
      "registrationNumber": "SEED-SCHOOL-R029",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "293263f7-28f0-4f92-832a-977fe73d55b7",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "ab35bfb7-23ad-48fb-816b-70f76692b760",
      "fullName": "Omar SCHOOL 030",
      "fatherName": "Khalid",
      "registrationNumber": "SEED-SCHOOL-R030",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "36566ae3-e44f-48fd-9e3f-63982ca72fc1",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "9316f919-0f71-4578-9c6f-69d92dfcacc9",
      "fullName": "Ibrahim SCHOOL 031",
      "fatherName": "Shahid",
      "registrationNumber": "SEED-SCHOOL-R031",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "54b8e880-4393-44eb-b731-b750c10a0113",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f240e1e8-9ab6-4844-b469-7f5e52f90b7a",
      "fullName": "Zain SCHOOL 032",
      "fatherName": "Akram",
      "registrationNumber": "SEED-SCHOOL-R032",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "db9603b1-61df-44d4-90b7-d7dd900f7fbf",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6b53151a-b1c0-4ee3-9746-3ab19405626a",
      "fullName": "Ali SCHOOL 033",
      "fatherName": "Anwar",
      "registrationNumber": "SEED-SCHOOL-R033",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "6a249405-04cb-4e87-83f8-dc9f3a9fb003",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "22af6da1-d9e8-4fd7-9d55-21576a7f0cb8",
      "fullName": "Saad SCHOOL 034",
      "fatherName": "Bashir",
      "registrationNumber": "SEED-SCHOOL-R034",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "6f691baf-980d-4a68-a9c3-609ac5f03cc1",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "36ced660-aa4e-4b0e-b74d-f5046f5ceeba",
      "fullName": "Fahad SCHOOL 035",
      "fatherName": "Latif",
      "registrationNumber": "SEED-SCHOOL-R035",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d3432e37-db3d-4c8f-af52-8c3ac33bdcb4",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f9808b1c-220b-4f3e-b988-08ad85698a80",
      "fullName": "Tariq SCHOOL 036",
      "fatherName": "Majeed",
      "registrationNumber": "SEED-SCHOOL-R036",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "58e3f4f3-130d-44fd-aebe-dcb420340669",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "62616892-e76c-4a2a-aa20-4b197bd2c385",
      "fullName": "Imran SCHOOL 037",
      "fatherName": "Qasim",
      "registrationNumber": "SEED-SCHOOL-R037",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "53ca0898-b8e0-47c0-9f99-44c8795db6a1",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "1e8c4912-6d23-43b4-ae27-5f50a93ebf46",
      "fullName": "Naveed SCHOOL 038",
      "fatherName": "Rafiq",
      "registrationNumber": "SEED-SCHOOL-R038",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "babcbcbe-5389-476f-9374-b110711c2390",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "de3dea20-8f1d-4fe3-aff0-fd89cd83024e",
      "fullName": "Kashif SCHOOL 039",
      "fatherName": "Saleem",
      "registrationNumber": "SEED-SCHOOL-R039",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4d2c571c-561e-4e5d-b2eb-5454019b0aa5",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f5adbaa7-1d73-45a8-b803-53953c7f038b",
      "fullName": "Adnan SCHOOL 040",
      "fatherName": "Tahir",
      "registrationNumber": "SEED-SCHOOL-R040",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "02e86ecf-eab0-4ceb-afcd-3a8f66545b11",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "333c4708-c964-4597-ba3d-afbcdd8fb022",
      "fullName": "Farhan SCHOOL 041",
      "fatherName": "Zahid",
      "registrationNumber": "SEED-SCHOOL-R041",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "dc59e6ea-3de3-4baa-a632-63b8d1239c40",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "e0265cb7-c00c-48e6-8859-f1c27dc7a88d",
      "fullName": "Waleed SCHOOL 042",
      "fatherName": "Arshad",
      "registrationNumber": "SEED-SCHOOL-R042",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "51920b47-fc9a-4237-a824-d767d24233ca",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "23548695-bd27-4a2b-9ebe-45aabcd3980d",
      "fullName": "Rayyan SCHOOL 043",
      "fatherName": "Faisal",
      "registrationNumber": "SEED-SCHOOL-R043",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "c1ceeaa3-ccd8-44f7-b4e9-05f9db6d5774",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "6a169873-5b7e-42c7-942b-3671588d4a69",
      "fullName": "Suleman SCHOOL 044",
      "fatherName": "Hameed",
      "registrationNumber": "SEED-SCHOOL-R044",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "16b170dd-361e-42de-a674-d347d2339769",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "68e80f81-ea88-45e7-b770-a55769d7a430",
      "fullName": "Haroon SCHOOL 045",
      "fatherName": "Iqbal",
      "registrationNumber": "SEED-SCHOOL-R045",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ecd31be5-aa19-43d0-a5eb-42d4376182d9",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "f66639b4-eecc-4b4a-b3f3-e4f8496200b9",
      "fullName": "Junaid SCHOOL 046",
      "fatherName": "Younis",
      "registrationNumber": "SEED-SCHOOL-R046",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "27600bc8-2ff1-4c73-9e90-a6f743149a79",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "a898f3e0-a673-4d51-91bf-7a919b70ead5",
      "fullName": "Danish SCHOOL 047",
      "fatherName": "Muhammad",
      "registrationNumber": "SEED-SCHOOL-R047",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "03f56470-3f37-4a45-a884-db462302c221",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "d63c3b49-0c7e-4846-b8b7-96949f28ceea",
      "fullName": "Ayaan SCHOOL 048",
      "fatherName": "Abdul",
      "registrationNumber": "SEED-SCHOOL-R048",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "61c4848a-9293-4f2a-9a76-d413583578b4",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "9ef27974-aa89-47f6-bf18-be20d93b7c24",
      "fullName": "Ahmed SCHOOL 049",
      "fatherName": "Ghulam",
      "registrationNumber": "SEED-SCHOOL-R049",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4bad16d3-2db8-4cff-8632-be954bec0f79",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "academicYearId": "fd1897ab-0d64-4045-b222-0a90624da950",
      "studentId": "59a9336b-4554-4cd6-a2cd-ee98bb26992e",
      "fullName": "Hassan SCHOOL 050",
      "fatherName": "Saeed",
      "registrationNumber": "SEED-SCHOOL-R050",
      "enrolledAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.db.academics.seeded": "true",
  "dup.hifz.classes": [
    {
      "id": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "nameEn": "Hifz Class A",
      "nameUr": "حفظ کلاس اے",
      "code": "SEED-HFZ-A",
      "studentCount": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "nameEn": "Hifz Class B",
      "nameUr": "حفظ کلاس بی",
      "code": "SEED-HFZ-B",
      "studentCount": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.hifz.lectures": [
    {
      "id": "766da327-2397-4641-89f2-61e55385464e",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Nazira",
      "teacherId": "eebdce65-11d9-4358-9bc8-7bf650101d96",
      "teacherName": "Maulana Chishti HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "97a8e885-76c1-4efa-99c2-b5bfa302e21d",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Hifz Sabaq",
      "teacherId": "be357fad-bfad-4b62-8b8b-8ea52709b433",
      "teacherName": "Qari Ansari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "515b900e-54fd-4b79-bf2e-d3747dd3d8f2",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Sabqi",
      "teacherId": "1c652fda-5a07-4a4b-827c-316dc7684e6e",
      "teacherName": "Hafiz Hashmi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8812256a-61a5-425a-92d4-da4e3c702260",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Manzil",
      "teacherId": "662316c1-e0a7-4ee8-bddb-e739f573091e",
      "teacherName": "Mufti Naqvi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "0bfe7e9e-b424-4457-b38d-f97894c3e2f5",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Tajweed",
      "teacherId": "3a627b95-9dc0-461f-9d1c-1fee87449b35",
      "teacherName": "Ustad Bukhari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7786d166-6256-4ffb-b8e8-5312e9f6bc1a",
      "classId": "5fdc2f1e-22ea-411d-93b5-02e646ebd608",
      "subject": "Tarbiyah",
      "teacherId": "c28a1740-7adb-4304-a0b9-7c3d0ebe237b",
      "teacherName": "Sheikh Gilani HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ad88d4db-cf8d-4fbb-8703-973a6f26382e",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Nazira",
      "teacherId": "eebdce65-11d9-4358-9bc8-7bf650101d96",
      "teacherName": "Maulana Chishti HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "2f662e2d-805a-4bfe-8cae-f589a4df2021",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Hifz Sabaq",
      "teacherId": "be357fad-bfad-4b62-8b8b-8ea52709b433",
      "teacherName": "Qari Ansari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "17a68a01-b761-4b30-8b63-04101f658f49",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Sabqi",
      "teacherId": "1c652fda-5a07-4a4b-827c-316dc7684e6e",
      "teacherName": "Hafiz Hashmi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "27389e55-23f6-485b-872e-e1b38e8d099e",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Manzil",
      "teacherId": "662316c1-e0a7-4ee8-bddb-e739f573091e",
      "teacherName": "Mufti Naqvi HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ac14b3fb-ff01-402a-b570-a4bdc8ec5dc5",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Tajweed",
      "teacherId": "3a627b95-9dc0-461f-9d1c-1fee87449b35",
      "teacherName": "Ustad Bukhari HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "ac679bb8-9b88-45fe-8b73-09790c27cc65",
      "classId": "0987083a-8643-4496-96a8-b8ea2a8bceba",
      "subject": "Tarbiyah",
      "teacherId": "c28a1740-7adb-4304-a0b9-7c3d0ebe237b",
      "teacherName": "Sheikh Gilani HIFZ",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.hifz.seeded": "true",
  "dup.kutub.classes": [
    {
      "id": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "nameEn": "Kutub Class A",
      "nameUr": "کتب کلاس اے",
      "code": "SEED-KTB-A",
      "studentCount": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "8fb95662-c090-4406-9e39-602fee514965",
      "nameEn": "Kutub Class B",
      "nameUr": "کتب کلاس بی",
      "code": "SEED-KTB-B",
      "studentCount": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.kutub.lectures": [
    {
      "id": "398627af-a5d0-4fc0-8982-8371ba243300",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Nahw",
      "teacherId": "a2eb0702-80d8-4b80-a35c-f38bee87d996",
      "teacherName": "Maulana Ansari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "047aa03b-7ab0-43aa-beb8-4bd2ec4a4b8a",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Sarf",
      "teacherId": "f4ea67b5-38c0-4120-9819-f52ffbb1d765",
      "teacherName": "Qari Hashmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "5c0aeb22-5658-41eb-90b1-2639f6378649",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Fiqh",
      "teacherId": "abf594c9-9e69-4660-8601-7b0217e263c1",
      "teacherName": "Hafiz Naqvi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "7719b63d-c45e-4013-9832-76ade8453fc4",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Hadith",
      "teacherId": "15bfbe3f-5cc2-476e-a3aa-4349f6d1d8d2",
      "teacherName": "Mufti Bukhari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "81f1430d-dd81-4968-8fcb-3f541470d51a",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Tafsir",
      "teacherId": "83f40316-0110-497e-94cc-81a03ecab141",
      "teacherName": "Ustad Gilani KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e24256d7-9750-4e10-8fe6-a405f0fce9a0",
      "classId": "d26e4617-4cb4-4a42-bba3-c8ab625fa50c",
      "subject": "Adab",
      "teacherId": "5d6c34f7-f583-4238-a5e9-f23ee1e3b0aa",
      "teacherName": "Sheikh Kazmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "77155500-f93c-4eb9-9683-f2985a7dba20",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Nahw",
      "teacherId": "a2eb0702-80d8-4b80-a35c-f38bee87d996",
      "teacherName": "Maulana Ansari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3cf51e14-8d65-4e8b-a1f4-70de2e5576a5",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Sarf",
      "teacherId": "f4ea67b5-38c0-4120-9819-f52ffbb1d765",
      "teacherName": "Qari Hashmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "da86fca2-f2f7-4e69-a9c5-9c7381f09490",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Fiqh",
      "teacherId": "abf594c9-9e69-4660-8601-7b0217e263c1",
      "teacherName": "Hafiz Naqvi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "e7f7511e-0260-42ed-89a9-a0838fd9b0d3",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Hadith",
      "teacherId": "15bfbe3f-5cc2-476e-a3aa-4349f6d1d8d2",
      "teacherName": "Mufti Bukhari KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fc88b0ea-10bf-47e5-b56f-0bf7b5b2f086",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Tafsir",
      "teacherId": "83f40316-0110-497e-94cc-81a03ecab141",
      "teacherName": "Ustad Gilani KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "b5b570d1-aee1-4099-a462-5088c7454e12",
      "classId": "8fb95662-c090-4406-9e39-602fee514965",
      "subject": "Adab",
      "teacherId": "5d6c34f7-f583-4238-a5e9-f23ee1e3b0aa",
      "teacherName": "Sheikh Kazmi KUTUB",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.kutub.seeded": "true",
  "dup.school.classes": [
    {
      "id": "3a452c93-2076-4c8e-a254-199f42148b51",
      "nameEn": "School Class A",
      "nameUr": "اسکول کلاس اے",
      "code": "SEED-SCH-A",
      "studentCount": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "nameEn": "School Class B",
      "nameUr": "اسکول کلاس بی",
      "code": "SEED-SCH-B",
      "studentCount": 25,
      "isActive": true,
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.school.lectures": [
    {
      "id": "99d92615-82ca-495f-ae75-58ee95555575",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Mathematics",
      "teacherId": "52e1878d-4c98-4730-865a-e55ef7707c4b",
      "teacherName": "Maulana Hashmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d0076231-77ae-4b82-93a4-3f1e023056db",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "English",
      "teacherId": "ed383073-2a8a-4ddc-99bd-45482d0431b1",
      "teacherName": "Qari Naqvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "33595b2c-5987-42f9-a3d5-c2a5cf786555",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Urdu",
      "teacherId": "89876694-f45b-4656-b7d4-d98e06327874",
      "teacherName": "Hafiz Bukhari SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "539727d1-a30c-48d2-9b6f-211898f71d22",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Science",
      "teacherId": "088dde03-134b-4768-86d7-30455d6a136d",
      "teacherName": "Mufti Gilani SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fa21896e-b746-45f9-a32d-ab1e123618a4",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Islamiyat",
      "teacherId": "5136c981-b454-44bc-92f1-c52e7e27b58c",
      "teacherName": "Ustad Kazmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "f76c0ac8-2c17-4b77-86c8-46534bec61de",
      "classId": "3a452c93-2076-4c8e-a254-199f42148b51",
      "subject": "Pakistan Studies",
      "teacherId": "42511a30-f406-4d45-8251-c1cb60472600",
      "teacherName": "Sheikh Razvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "4ae85cfc-4645-437e-bb2c-e934d7a59311",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Mathematics",
      "teacherId": "52e1878d-4c98-4730-865a-e55ef7707c4b",
      "teacherName": "Maulana Hashmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "fb120f2e-7441-48af-91bd-59a80e81192d",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "English",
      "teacherId": "ed383073-2a8a-4ddc-99bd-45482d0431b1",
      "teacherName": "Qari Naqvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "d150b639-b35a-4f70-963f-4f0712939c85",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Urdu",
      "teacherId": "89876694-f45b-4656-b7d4-d98e06327874",
      "teacherName": "Hafiz Bukhari SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "9120e450-6bd1-4d49-a5ca-c6c3d9c58e3b",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Science",
      "teacherId": "088dde03-134b-4768-86d7-30455d6a136d",
      "teacherName": "Mufti Gilani SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "381123f6-e01a-4d85-aadf-3159915cb2d5",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Islamiyat",
      "teacherId": "5136c981-b454-44bc-92f1-c52e7e27b58c",
      "teacherName": "Ustad Kazmi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    },
    {
      "id": "1aadcb32-8aab-4fa5-9191-6705a4019332",
      "classId": "3b9d5f5a-b51a-4828-8216-f185bd5bfe4e",
      "subject": "Pakistan Studies",
      "teacherId": "42511a30-f406-4d45-8251-c1cb60472600",
      "teacherName": "Sheikh Razvi SCHOOL",
      "createdAt": "2026-08-25T14:08:07.800Z",
      "updatedAt": "2026-08-25T14:08:07.800Z"
    }
  ],
  "dup.school.seeded": "true"
};
  for (const [key, value] of Object.entries(data)) {
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  }
  localStorage.setItem("dup.demo.localVersion", "2026-08-25T14:08:07.800Z");
  console.log("Demo localStorage applied.", {
    keys: Object.keys(data),
    classes: data["dup.db.classes"].length,
    enrollments: data["dup.db.enrollments"].length,
    lectures: data["dup.db.classLectures"].length,
  });
  console.log("Reload the page to see Hifz / Kutub / School / Academics / Attendance updates.");
})();
