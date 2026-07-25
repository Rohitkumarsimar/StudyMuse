import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskFilters } from "../components/tasks/TaskFilters.jsx";
import TaskCard from "../components/tasks/TaskCard.jsx";
import { TaskForm } from "../components/tasks/TaskForm.jsx";
import { Spinner } from "../components/ui/spinner.jsx";

export default function Tasks() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { tasks, isLoading, createTask, deleteTask, toggleComplete } =
    useTasks();

  //temporary state
  const [selectedValue, setSelectedValue] = useState("");
  const [secondSelectedValue, setSecondSelectedValue] = useState("");
  const [thirdSelectedValue, setThirdSelectedValue] = useState("");
  const [fourthSelectedValue, setFourthSelectedValue] = useState("");
  const [chapter, setChapter] = useState("");
  const data = [
    {
      id: "a7169f5f-a558-440a-ac91-197ca4bfbd41",
      name: "CBSE",
      created_at: "2026-07-16T06:52:29.474Z",
      updated_at: "2026-07-16T06:52:29.474Z",
      academicClasses: [
        {
          id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
          board_id: "a7169f5f-a558-440a-ac91-197ca4bfbd41",
          name: "Class 10",
          created_at: "2026-07-16T06:52:30.120Z",
          updated_at: "2026-07-16T06:52:30.120Z",
          subjects: [
            {
              id: "692df7e4-64c8-4c28-b4d6-92db7e0cb6be",
              academicClass_id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
              name: "English",
              created_at: "2026-07-16T06:52:53.154Z",
              updated_at: "2026-07-16T06:52:53.154Z",
              books: [
                {
                  id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                  subject_id: "692df7e4-64c8-4c28-b4d6-92db7e0cb6be",
                  name: "First Flight",
                  created_at: "2026-07-16T06:52:53.474Z",
                  updated_at: "2026-07-16T06:52:53.474Z",
                  chapters: [
                    {
                      id: "2b7daa2b-e820-4be0-898e-c6063a51895b",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "A Letter to God",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:53.816Z",
                      updated_at: "2026-07-16T06:52:53.816Z",
                    },
                    {
                      id: "b26daafb-2ccf-4bfd-802a-d3c6533b6f3e",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "Nelson Mandela: Long Walk to Freedom",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:54.114Z",
                      updated_at: "2026-07-16T06:52:54.114Z",
                    },
                    {
                      id: "89564846-9919-475d-8d3d-3ae4cb06b3cd",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "Two Stories About Flying",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:54.456Z",
                      updated_at: "2026-07-16T06:52:54.456Z",
                    },
                    {
                      id: "983b5a3d-2744-41d2-baa2-5431994b0abf",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "From the Diary of Anne Frank",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:54.719Z",
                      updated_at: "2026-07-16T06:52:54.719Z",
                    },
                    {
                      id: "51da8d80-2ba1-4423-9ad6-d63a7fb5a055",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "The Hundred Dresses - I",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:55.075Z",
                      updated_at: "2026-07-16T06:52:55.075Z",
                    },
                    {
                      id: "8ab8ef34-dca0-414a-bbc2-7926bddc269b",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "The Hundred Dresses - II",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:52:55.394Z",
                      updated_at: "2026-07-16T06:52:55.394Z",
                    },
                    {
                      id: "3e60c933-f6ab-408d-a59a-2a201edb0b62",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "Glimpses of India",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:52:55.651Z",
                      updated_at: "2026-07-16T06:52:55.651Z",
                    },
                    {
                      id: "bc0d45cf-b770-4f93-86b2-5abb0b09c31d",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "Mijbil the Otter",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:52:55.981Z",
                      updated_at: "2026-07-16T06:52:55.981Z",
                    },
                    {
                      id: "d315f872-cc28-4739-9c89-652b97f2ccf0",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "Madam Rides the Bus",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:52:56.230Z",
                      updated_at: "2026-07-16T06:52:56.230Z",
                    },
                    {
                      id: "5f601de4-081d-4e8d-bcdd-7e50d962bac8",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "The Sermon at Benares",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:52:56.496Z",
                      updated_at: "2026-07-16T06:52:56.496Z",
                    },
                    {
                      id: "a4234c53-4623-41e7-bc02-6359884c83dd",
                      book_id: "193a9bde-07fb-48a6-8773-e935feaacb1d",
                      name: "The Proposal",
                      chapter_order: 11,
                      created_at: "2026-07-16T06:52:56.835Z",
                      updated_at: "2026-07-16T06:52:56.835Z",
                    },
                  ],
                },
                {
                  id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                  subject_id: "692df7e4-64c8-4c28-b4d6-92db7e0cb6be",
                  name: "Footprints Without Feet",
                  created_at: "2026-07-16T06:52:57.089Z",
                  updated_at: "2026-07-16T06:52:57.089Z",
                  chapters: [
                    {
                      id: "ecf5489a-4ce5-4975-a0f5-9857783082da",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "A Triumph of Surgery",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:57.477Z",
                      updated_at: "2026-07-16T06:52:57.477Z",
                    },
                    {
                      id: "1608671a-ff1f-4a14-8109-cc94a12c8567",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "The Thief's Story",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:57.794Z",
                      updated_at: "2026-07-16T06:52:57.794Z",
                    },
                    {
                      id: "b5605f6d-8ab8-4b8e-9e3d-3632b1f9bfd6",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "The Midnight Visitor",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:58.069Z",
                      updated_at: "2026-07-16T06:52:58.069Z",
                    },
                    {
                      id: "60db189d-b323-4649-a8c3-917f2187e495",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "A Question of Trust",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:58.329Z",
                      updated_at: "2026-07-16T06:52:58.329Z",
                    },
                    {
                      id: "c97c3c8d-4190-4041-926d-5d742b36c423",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "Footprints Without Feet",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:58.595Z",
                      updated_at: "2026-07-16T06:52:58.595Z",
                    },
                    {
                      id: "b14cfeb8-07ed-41ae-8865-e5961c5a78e2",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "The Making of a Scientist",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:52:58.914Z",
                      updated_at: "2026-07-16T06:52:58.914Z",
                    },
                    {
                      id: "de7cea81-a960-4beb-aed5-cd13f0067bc6",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "The Necklace",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:52:59.250Z",
                      updated_at: "2026-07-16T06:52:59.250Z",
                    },
                    {
                      id: "4224159b-a462-4cc6-9ce1-fc21676b3f49",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "The Hack Driver",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:52:59.554Z",
                      updated_at: "2026-07-16T06:52:59.554Z",
                    },
                    {
                      id: "96372709-ed06-4c5c-bb52-c2a312807eaa",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "Bholi",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:52:59.874Z",
                      updated_at: "2026-07-16T06:52:59.874Z",
                    },
                    {
                      id: "9adcc9cf-f5de-4fa1-bbf8-1b808df626bb",
                      book_id: "d288ef59-cf3f-4a01-bb13-484794c08fbc",
                      name: "The Book That Saved the Earth",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:53:00.514Z",
                      updated_at: "2026-07-16T06:53:00.514Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "1d75a294-94c2-4b9e-ade0-5d03c2e4454e",
              academicClass_id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
              name: "Hindi",
              created_at: "2026-07-16T06:53:00.834Z",
              updated_at: "2026-07-16T06:53:00.834Z",
              books: [
                {
                  id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                  subject_id: "1d75a294-94c2-4b9e-ade0-5d03c2e4454e",
                  name: "क्षितिज भाग 2",
                  created_at: "2026-07-16T06:53:01.156Z",
                  updated_at: "2026-07-16T06:53:01.156Z",
                  chapters: [
                    {
                      id: "23d3e0d6-435f-41c6-970d-30c7527a56ad",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "सूरदास",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:53:01.493Z",
                      updated_at: "2026-07-16T06:53:01.493Z",
                    },
                    {
                      id: "ad0a508a-cdad-45bd-8e0f-76b3fa73fd44",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "राम-लक्ष्मण-परशुराम संवाद",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:53:01.794Z",
                      updated_at: "2026-07-16T06:53:01.794Z",
                    },
                    {
                      id: "ad48d92b-2ae8-4d96-8cbd-a2108e465cef",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "सवैया और कवित्त",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:53:02.050Z",
                      updated_at: "2026-07-16T06:53:02.050Z",
                    },
                    {
                      id: "7760566f-b18e-4cb6-9970-ad50874235a8",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "आत्मकथ्य",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:53:02.440Z",
                      updated_at: "2026-07-16T06:53:02.440Z",
                    },
                    {
                      id: "2d092eb9-d6f7-45f5-926a-5621e6382f02",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "उत्साह",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:53:02.756Z",
                      updated_at: "2026-07-16T06:53:02.756Z",
                    },
                    {
                      id: "33de1973-370c-45ae-b391-c147d263a3fd",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "यह दंतुरहित मुस्कान",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:53:03.076Z",
                      updated_at: "2026-07-16T06:53:03.076Z",
                    },
                    {
                      id: "1b3a2cdc-8dbc-4a1e-b148-275ab528bff2",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "फसल",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:53:03.467Z",
                      updated_at: "2026-07-16T06:53:03.467Z",
                    },
                    {
                      id: "e3bfaf16-7fa8-4b2d-a8a6-c9f790ddbabc",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "संगतकार",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:53:03.878Z",
                      updated_at: "2026-07-16T06:53:03.878Z",
                    },
                    {
                      id: "d974151e-32fd-4a4e-bc15-ed4fb5d6257f",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "नेताजी का चश्मा",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:53:04.198Z",
                      updated_at: "2026-07-16T06:53:04.198Z",
                    },
                    {
                      id: "b5ef754a-c95a-443d-8377-8e9329cfa53d",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "बालगोबिन भगत",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:53:04.520Z",
                      updated_at: "2026-07-16T06:53:04.520Z",
                    },
                    {
                      id: "8afd9612-a6a2-4b63-ab9d-8232ddb9a5f6",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "लखनवी अंदाज़",
                      chapter_order: 11,
                      created_at: "2026-07-16T06:53:04.836Z",
                      updated_at: "2026-07-16T06:53:04.836Z",
                    },
                    {
                      id: "b6636358-03d1-4f02-87e6-8bd4456da8cf",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "मानवीय करुणा की दिव्य चमक",
                      chapter_order: 12,
                      created_at: "2026-07-16T06:53:05.156Z",
                      updated_at: "2026-07-16T06:53:05.156Z",
                    },
                    {
                      id: "c6964767-fc53-4056-b3b0-60802bb17781",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "एक कहानी यह भी",
                      chapter_order: 13,
                      created_at: "2026-07-16T06:53:05.476Z",
                      updated_at: "2026-07-16T06:53:05.476Z",
                    },
                    {
                      id: "1e2513d4-2703-4470-a2b1-257471c00b9f",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "स्त्री शिक्षा के विरोधी कुतर्कों का खंडन",
                      chapter_order: 14,
                      created_at: "2026-07-16T06:53:05.798Z",
                      updated_at: "2026-07-16T06:53:05.798Z",
                    },
                    {
                      id: "6f48c082-50a4-4f9e-bbe6-b934b4d8ccd3",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "नौबतखाने में इबादत",
                      chapter_order: 15,
                      created_at: "2026-07-16T06:53:06.118Z",
                      updated_at: "2026-07-16T06:53:06.118Z",
                    },
                    {
                      id: "1e2c7530-a0a1-429c-ad0a-06a86ddce9aa",
                      book_id: "2dcaeccb-318a-4cc2-b571-9cab109e6b74",
                      name: "संस्कृति",
                      chapter_order: 16,
                      created_at: "2026-07-16T06:53:06.439Z",
                      updated_at: "2026-07-16T06:53:06.439Z",
                    },
                  ],
                },
                {
                  id: "baa4255c-4101-4d76-a57d-ab8f39d98ae9",
                  subject_id: "1d75a294-94c2-4b9e-ade0-5d03c2e4454e",
                  name: "कृतिका भाग 2",
                  created_at: "2026-07-16T06:53:06.754Z",
                  updated_at: "2026-07-16T06:53:06.754Z",
                  chapters: [
                    {
                      id: "27179eb9-87f0-4e2f-bc98-98f67d3f1f02",
                      book_id: "baa4255c-4101-4d76-a57d-ab8f39d98ae9",
                      name: "माता का अंचल",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:53:07.009Z",
                      updated_at: "2026-07-16T06:53:07.009Z",
                    },
                    {
                      id: "a8ac772b-58cd-42a2-b8c2-aeb53e6acb8e",
                      book_id: "baa4255c-4101-4d76-a57d-ab8f39d98ae9",
                      name: "जॉर्ज पंचम की नाक",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:53:07.492Z",
                      updated_at: "2026-07-16T06:53:07.492Z",
                    },
                    {
                      id: "219ddb91-eb6f-41db-a4cc-276b8e898e25",
                      book_id: "baa4255c-4101-4d76-a57d-ab8f39d98ae9",
                      name: "साना-साना हाथ जोड़ि",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:53:07.887Z",
                      updated_at: "2026-07-16T06:53:07.887Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "89ade474-6ae2-4cac-8525-fdd72f74c39e",
              academicClass_id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
              name: "Mathematics",
              created_at: "2026-07-16T06:52:30.755Z",
              updated_at: "2026-07-16T06:52:30.755Z",
              books: [
                {
                  id: "39189703-efb9-42bf-865e-1224fc2015cc",
                  subject_id: "89ade474-6ae2-4cac-8525-fdd72f74c39e",
                  name: "Mathematics",
                  created_at: "2026-07-16T06:52:31.397Z",
                  updated_at: "2026-07-16T06:52:31.397Z",
                  chapters: [
                    {
                      id: "55374102-a3e9-4f21-8a04-406f552052ba",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Real Numbers",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:32.039Z",
                      updated_at: "2026-07-16T06:52:32.039Z",
                    },
                    {
                      id: "c24a92d4-e84d-4ec3-a842-fd934d571f43",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Polynomials",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:32.685Z",
                      updated_at: "2026-07-16T06:52:32.685Z",
                    },
                    {
                      id: "a9e224a9-dde2-4814-a698-a1cd02a1da1b",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Pair of Linear Equations in Two Variables",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:32.996Z",
                      updated_at: "2026-07-16T06:52:32.996Z",
                    },
                    {
                      id: "07839ab3-acd1-4ebe-9968-7732daed624b",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Quadratic Equations",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:33.315Z",
                      updated_at: "2026-07-16T06:52:33.315Z",
                    },
                    {
                      id: "012309f4-6741-4ede-bbe6-0523e1af0fdf",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Arithmetic Progressions",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:33.637Z",
                      updated_at: "2026-07-16T06:52:33.637Z",
                    },
                    {
                      id: "94c068bc-7dcc-4c6b-869f-fb04e7773592",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Triangles",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:52:33.974Z",
                      updated_at: "2026-07-16T06:52:33.974Z",
                    },
                    {
                      id: "cd7588a8-eac3-4cb0-bf99-9f2ce80a7d76",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Coordinate Geometry",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:52:34.280Z",
                      updated_at: "2026-07-16T06:52:34.280Z",
                    },
                    {
                      id: "e3902a58-1ad7-44c2-a8e1-d88e99c7ed79",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Introduction to Trigonometry",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:52:34.561Z",
                      updated_at: "2026-07-16T06:52:34.561Z",
                    },
                    {
                      id: "a9f3ebf8-7d1d-4b9b-9cfe-aa9588c160e0",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Some Applications of Trigonometry",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:52:34.820Z",
                      updated_at: "2026-07-16T06:52:34.820Z",
                    },
                    {
                      id: "e46ae72d-6367-44fd-bc37-90531dd39939",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Circles",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:52:35.074Z",
                      updated_at: "2026-07-16T06:52:35.074Z",
                    },
                    {
                      id: "fe281095-eb66-4611-adf3-25d029d03fb4",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Constructions",
                      chapter_order: 11,
                      created_at: "2026-07-16T06:52:35.410Z",
                      updated_at: "2026-07-16T06:52:35.410Z",
                    },
                    {
                      id: "c4950967-fc47-4697-b247-97a9889122d5",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Areas Related to Circles",
                      chapter_order: 12,
                      created_at: "2026-07-16T06:52:35.718Z",
                      updated_at: "2026-07-16T06:52:35.718Z",
                    },
                    {
                      id: "4120fcae-366b-4420-969f-b7b555928902",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Surface Areas and Volumes",
                      chapter_order: 13,
                      created_at: "2026-07-16T06:52:36.035Z",
                      updated_at: "2026-07-16T06:52:36.035Z",
                    },
                    {
                      id: "4875334f-c53c-45e3-ba85-732bd0dd2eb9",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Statistics",
                      chapter_order: 14,
                      created_at: "2026-07-16T06:52:36.354Z",
                      updated_at: "2026-07-16T06:52:36.354Z",
                    },
                    {
                      id: "935667f7-be1d-4d1c-8dc9-1200085ab5a9",
                      book_id: "39189703-efb9-42bf-865e-1224fc2015cc",
                      name: "Probability",
                      chapter_order: 15,
                      created_at: "2026-07-16T06:52:36.741Z",
                      updated_at: "2026-07-16T06:52:36.741Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "0fa86a55-d1c7-4bc7-b814-204fcedcee9d",
              academicClass_id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
              name: "Sanskrit",
              created_at: "2026-07-16T06:53:08.157Z",
              updated_at: "2026-07-16T06:53:08.157Z",
              books: [
                {
                  id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                  subject_id: "0fa86a55-d1c7-4bc7-b814-204fcedcee9d",
                  name: "Shemushi",
                  created_at: "2026-07-16T06:53:08.608Z",
                  updated_at: "2026-07-16T06:53:08.608Z",
                  chapters: [
                    {
                      id: "bfa3a97c-725e-4f9a-8e69-72060ce4c27d",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "शुचिपर्यावरणम्",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:53:08.995Z",
                      updated_at: "2026-07-16T06:53:08.995Z",
                    },
                    {
                      id: "6e2ecd47-cf00-461b-9f06-c03c773e0f59",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "बुद्धिर्बलवती सदा",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:53:09.327Z",
                      updated_at: "2026-07-16T06:53:09.327Z",
                    },
                    {
                      id: "273e7578-92ff-4b08-8d9e-dc7ccf910774",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "शिशुलालनम्",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:53:09.714Z",
                      updated_at: "2026-07-16T06:53:09.714Z",
                    },
                    {
                      id: "59d8da2f-91b7-441d-b2b4-ca9d79227661",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "जननी तुल्यवत्सला",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:53:10.137Z",
                      updated_at: "2026-07-16T06:53:10.137Z",
                    },
                    {
                      id: "cd37549a-6a1e-4948-b640-b50bf6c6f394",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "सुभाषितानि",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:53:10.435Z",
                      updated_at: "2026-07-16T06:53:10.435Z",
                    },
                    {
                      id: "81fd9280-c317-48a1-990a-979f6c81d885",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "सौहार्दं प्रकृतेः शोभा",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:53:10.858Z",
                      updated_at: "2026-07-16T06:53:10.858Z",
                    },
                    {
                      id: "3e69b0d9-2c0b-4740-96be-decb05e9a5e1",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "विचित्रः साक्षी",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:53:11.236Z",
                      updated_at: "2026-07-16T06:53:11.236Z",
                    },
                    {
                      id: "baf4e8f3-8e81-40c5-ae37-cee0a34e40d2",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "सूक्ति-सुधा",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:53:11.577Z",
                      updated_at: "2026-07-16T06:53:11.577Z",
                    },
                    {
                      id: "de47eb63-5d05-4019-bda1-598587b8dfb1",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "भूकंपविभीषिका",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:53:11.878Z",
                      updated_at: "2026-07-16T06:53:11.878Z",
                    },
                    {
                      id: "6ece18f9-0866-4a45-bb15-ab498fa358da",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "कर्मवीरः",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:53:12.207Z",
                      updated_at: "2026-07-16T06:53:12.207Z",
                    },
                    {
                      id: "d1479680-e503-4bf4-b269-5f8f07874e2a",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "तत्त्वमसि",
                      chapter_order: 11,
                      created_at: "2026-07-16T06:53:12.513Z",
                      updated_at: "2026-07-16T06:53:12.513Z",
                    },
                    {
                      id: "11c9f442-d71b-4d0a-a56c-22d819b55d53",
                      book_id: "4c830f61-0894-4700-8176-d6a77dd3a240",
                      name: "अन्विष्यामः",
                      chapter_order: 12,
                      created_at: "2026-07-16T06:53:12.801Z",
                      updated_at: "2026-07-16T06:53:12.801Z",
                    },
                  ],
                },
                {
                  id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                  subject_id: "0fa86a55-d1c7-4bc7-b814-204fcedcee9d",
                  name: "Vyakaran and Composition",
                  created_at: "2026-07-16T06:53:13.154Z",
                  updated_at: "2026-07-16T06:53:13.154Z",
                  chapters: [
                    {
                      id: "0fc23ed7-a340-4dd8-9c0e-788c0b1f819b",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "अपठित-अवबोधनम्",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:53:13.468Z",
                      updated_at: "2026-07-16T06:53:13.468Z",
                    },
                    {
                      id: "3ae77822-cad9-43c6-9ff3-2a671cf0c9b4",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "रचना",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:53:13.739Z",
                      updated_at: "2026-07-16T06:53:13.739Z",
                    },
                    {
                      id: "ad7c9694-7976-4100-bbb5-9340868b0890",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "सन्धि",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:53:14.015Z",
                      updated_at: "2026-07-16T06:53:14.015Z",
                    },
                    {
                      id: "0ede2a87-9df1-416f-b78b-fdf880178f95",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "समास",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:53:14.270Z",
                      updated_at: "2026-07-16T06:53:14.270Z",
                    },
                    {
                      id: "412b7e86-55aa-46e4-8de6-562d7d23874b",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "प्रत्यय",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:53:14.629Z",
                      updated_at: "2026-07-16T06:53:14.629Z",
                    },
                    {
                      id: "dd354403-1af2-4a87-98c0-59920c4a6325",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "अव्यय",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:53:14.898Z",
                      updated_at: "2026-07-16T06:53:14.898Z",
                    },
                    {
                      id: "dc65821e-cae2-46a4-a944-2ff7af781314",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "कारक और विभक्ति",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:53:15.159Z",
                      updated_at: "2026-07-16T06:53:15.159Z",
                    },
                    {
                      id: "a98a0af7-4151-4d14-a740-593a06138a22",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "समय लेखन",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:53:15.448Z",
                      updated_at: "2026-07-16T06:53:15.448Z",
                    },
                    {
                      id: "831260e4-dfb8-4ffd-81a9-8031ac47e01b",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "पत्र लेखन",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:53:16.035Z",
                      updated_at: "2026-07-16T06:53:16.035Z",
                    },
                    {
                      id: "5cc37c20-677f-4b63-b44f-960395a61f42",
                      book_id: "1f4cbb5d-e90e-4619-a80b-e42f47b57d16",
                      name: "अनुच्छेद लेखन",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:53:16.354Z",
                      updated_at: "2026-07-16T06:53:16.354Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "415872d2-bb57-4e63-b140-f8344beed385",
              academicClass_id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
              name: "Science",
              created_at: "2026-07-16T06:52:36.999Z",
              updated_at: "2026-07-16T06:52:36.999Z",
              books: [
                {
                  id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                  subject_id: "415872d2-bb57-4e63-b140-f8344beed385",
                  name: "Science",
                  created_at: "2026-07-16T06:52:37.315Z",
                  updated_at: "2026-07-16T06:52:37.315Z",
                  chapters: [
                    {
                      id: "6390ca7d-cb06-4ff2-8c20-84788954b1b1",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Chemical Reactions and Equations",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:37.634Z",
                      updated_at: "2026-07-16T06:52:37.634Z",
                    },
                    {
                      id: "22314220-c731-470d-bf19-b5f4eb9488bf",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Acids, Bases and Salts",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:37.954Z",
                      updated_at: "2026-07-16T06:52:37.954Z",
                    },
                    {
                      id: "f708330d-0c20-4551-bbd0-21e66919a6f6",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Metals and Non-metals",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:38.274Z",
                      updated_at: "2026-07-16T06:52:38.274Z",
                    },
                    {
                      id: "2e8418cc-d993-4277-992a-7d07ab6d0c39",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Carbon and Its Compounds",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:38.598Z",
                      updated_at: "2026-07-16T06:52:38.598Z",
                    },
                    {
                      id: "88a31f65-72c6-4c79-b9a5-472e3297984d",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Periodic Classification of Elements",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:38.864Z",
                      updated_at: "2026-07-16T06:52:38.864Z",
                    },
                    {
                      id: "d21168ca-f296-49a3-820f-2da75c5cdcdd",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Life Processes",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:52:39.114Z",
                      updated_at: "2026-07-16T06:52:39.114Z",
                    },
                    {
                      id: "44005670-323c-4444-b6a2-d4dfed6dbc63",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Control and Coordination",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:52:39.404Z",
                      updated_at: "2026-07-16T06:52:39.404Z",
                    },
                    {
                      id: "6c31ab16-3958-4535-99ae-4079f4e2422b",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "How Do Organisms Reproduce?",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:52:39.660Z",
                      updated_at: "2026-07-16T06:52:39.660Z",
                    },
                    {
                      id: "c7d09e9b-68ba-4066-b375-5526a8caffc2",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Heredity and Evolution",
                      chapter_order: 9,
                      created_at: "2026-07-16T06:52:39.921Z",
                      updated_at: "2026-07-16T06:52:39.921Z",
                    },
                    {
                      id: "cbe0322f-c8e0-4ed3-a4d4-b541535a720d",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Light - Reflection and Refraction",
                      chapter_order: 10,
                      created_at: "2026-07-16T06:52:40.180Z",
                      updated_at: "2026-07-16T06:52:40.180Z",
                    },
                    {
                      id: "4a1e50bf-9f27-4ea2-9a55-5b4bde19d88b",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "The Human Eye and the Colourful World",
                      chapter_order: 11,
                      created_at: "2026-07-16T06:52:40.515Z",
                      updated_at: "2026-07-16T06:52:40.515Z",
                    },
                    {
                      id: "ae5809a1-8bd5-4c73-93b8-c2ef342705cc",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Electricity",
                      chapter_order: 12,
                      created_at: "2026-07-16T06:52:40.838Z",
                      updated_at: "2026-07-16T06:52:40.838Z",
                    },
                    {
                      id: "34919890-17b3-4ffb-81dc-4ae29ab92801",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Magnetic Effects of Electric Current",
                      chapter_order: 13,
                      created_at: "2026-07-16T06:52:41.247Z",
                      updated_at: "2026-07-16T06:52:41.247Z",
                    },
                    {
                      id: "ae473635-febe-4897-bc5a-7b8da466e572",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Our Environment",
                      chapter_order: 14,
                      created_at: "2026-07-16T06:52:41.656Z",
                      updated_at: "2026-07-16T06:52:41.656Z",
                    },
                    {
                      id: "303aa1fe-d6c2-4d51-8171-a825a237ed83",
                      book_id: "a1b8b5fa-39e2-4628-8d14-c722582b23df",
                      name: "Management of Natural Resources",
                      chapter_order: 15,
                      created_at: "2026-07-16T06:52:42.066Z",
                      updated_at: "2026-07-16T06:52:42.066Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "bddd63e0-2c68-4779-96f0-48cec068c53d",
              academicClass_id: "27d26bb7-cfff-468f-bf52-afc369fdd760",
              name: "Social Science",
              created_at: "2026-07-16T06:52:42.476Z",
              updated_at: "2026-07-16T06:52:42.476Z",
              books: [
                {
                  id: "a2f5b08e-f436-4e2f-a224-a3eee59e5967",
                  subject_id: "bddd63e0-2c68-4779-96f0-48cec068c53d",
                  name: "History - India and the Contemporary World II",
                  created_at: "2026-07-16T06:52:42.755Z",
                  updated_at: "2026-07-16T06:52:42.755Z",
                  chapters: [
                    {
                      id: "f5f5dfc9-8ac1-4aea-a129-837d1d724826",
                      book_id: "a2f5b08e-f436-4e2f-a224-a3eee59e5967",
                      name: "The Rise of Nationalism in Europe",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:43.075Z",
                      updated_at: "2026-07-16T06:52:43.075Z",
                    },
                    {
                      id: "463d3591-11c1-495d-b59a-68ce78134f1b",
                      book_id: "a2f5b08e-f436-4e2f-a224-a3eee59e5967",
                      name: "Nationalism in India",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:43.396Z",
                      updated_at: "2026-07-16T06:52:43.396Z",
                    },
                    {
                      id: "b8f94615-cfd5-4da9-bb1e-ad30e0a897fc",
                      book_id: "a2f5b08e-f436-4e2f-a224-a3eee59e5967",
                      name: "The Making of a Global World",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:43.807Z",
                      updated_at: "2026-07-16T06:52:43.807Z",
                    },
                    {
                      id: "f857c1d1-4497-4d06-8a9b-45fa81f851dd",
                      book_id: "a2f5b08e-f436-4e2f-a224-a3eee59e5967",
                      name: "The Age of Industrialisation",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:44.198Z",
                      updated_at: "2026-07-16T06:52:44.198Z",
                    },
                    {
                      id: "093e6ccc-c8a8-4714-8fd7-4e70fb16d222",
                      book_id: "a2f5b08e-f436-4e2f-a224-a3eee59e5967",
                      name: "Print Culture and the Modern World",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:44.516Z",
                      updated_at: "2026-07-16T06:52:44.516Z",
                    },
                  ],
                },
                {
                  id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                  subject_id: "bddd63e0-2c68-4779-96f0-48cec068c53d",
                  name: "Geography - Contemporary India II",
                  created_at: "2026-07-16T06:52:45.240Z",
                  updated_at: "2026-07-16T06:52:45.240Z",
                  chapters: [
                    {
                      id: "bd31dc1f-7edc-4ffc-95bf-5c104654703d",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Resources and Development",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:45.636Z",
                      updated_at: "2026-07-16T06:52:45.636Z",
                    },
                    {
                      id: "861bf5aa-81b5-4905-a046-2b4fddc1ae4d",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Forest and Wildlife Resources",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:45.954Z",
                      updated_at: "2026-07-16T06:52:45.954Z",
                    },
                    {
                      id: "c34d508b-f020-4221-9298-65193190b8ad",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Water Resources",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:46.274Z",
                      updated_at: "2026-07-16T06:52:46.274Z",
                    },
                    {
                      id: "0a4ae439-cc51-44f0-9a87-9547d29139bb",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Agriculture",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:46.594Z",
                      updated_at: "2026-07-16T06:52:46.594Z",
                    },
                    {
                      id: "d5eb5b5e-ddb6-4967-a7ef-ca0bde3740d0",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Minerals and Energy Resources",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:46.915Z",
                      updated_at: "2026-07-16T06:52:46.915Z",
                    },
                    {
                      id: "bb036c24-25df-44f3-bba4-9ace96b37901",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Manufacturing Industries",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:52:47.288Z",
                      updated_at: "2026-07-16T06:52:47.288Z",
                    },
                    {
                      id: "176b1530-d038-4224-9209-fcc15b98168c",
                      book_id: "ce58bc84-2184-4e59-8a2f-62e63ae5d0c6",
                      name: "Lifelines of National Economy",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:52:47.555Z",
                      updated_at: "2026-07-16T06:52:47.555Z",
                    },
                  ],
                },
                {
                  id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                  subject_id: "bddd63e0-2c68-4779-96f0-48cec068c53d",
                  name: "Political Science - Democratic Politics II",
                  created_at: "2026-07-16T06:52:47.878Z",
                  updated_at: "2026-07-16T06:52:47.878Z",
                  chapters: [
                    {
                      id: "44656aa2-5cce-4883-aaaa-c8f471a26dcd",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Power Sharing",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:48.198Z",
                      updated_at: "2026-07-16T06:52:48.198Z",
                    },
                    {
                      id: "e63a7a3e-4e55-433f-b4e8-02566fe0a918",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Federalism",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:48.518Z",
                      updated_at: "2026-07-16T06:52:48.518Z",
                    },
                    {
                      id: "12274b3d-c0cc-4170-b20b-575e85cbf97c",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Democracy and Diversity",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:48.927Z",
                      updated_at: "2026-07-16T06:52:48.927Z",
                    },
                    {
                      id: "4b5a55e7-b315-44a6-970a-4ac610b026e7",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Gender, Religion and Caste",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:49.317Z",
                      updated_at: "2026-07-16T06:52:49.317Z",
                    },
                    {
                      id: "6a51b47a-929e-4a23-8841-7d83a1d83603",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Popular Struggles and Movements",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:49.640Z",
                      updated_at: "2026-07-16T06:52:49.640Z",
                    },
                    {
                      id: "8b5f5f60-2e8a-4f47-9204-bea544179ffc",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Political Parties",
                      chapter_order: 6,
                      created_at: "2026-07-16T06:52:49.958Z",
                      updated_at: "2026-07-16T06:52:49.958Z",
                    },
                    {
                      id: "d51fa7b5-523d-450d-b244-0583b2c268f1",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Outcomes of Democracy",
                      chapter_order: 7,
                      created_at: "2026-07-16T06:52:50.360Z",
                      updated_at: "2026-07-16T06:52:50.360Z",
                    },
                    {
                      id: "e07a68e1-59e0-4e11-b190-bf01974964ff",
                      book_id: "e4016b41-57c0-41ab-9a32-267c3b5a6f4d",
                      name: "Challenges to Democracy",
                      chapter_order: 8,
                      created_at: "2026-07-16T06:52:50.758Z",
                      updated_at: "2026-07-16T06:52:50.758Z",
                    },
                  ],
                },
                {
                  id: "31273d4a-10c6-4d20-91e8-bda7e3eb78b7",
                  subject_id: "bddd63e0-2c68-4779-96f0-48cec068c53d",
                  name: "Economics - Understanding Economic Development",
                  created_at: "2026-07-16T06:52:51.031Z",
                  updated_at: "2026-07-16T06:52:51.031Z",
                  chapters: [
                    {
                      id: "14aa9b24-f133-457f-b20a-a4d27e71f4ba",
                      book_id: "31273d4a-10c6-4d20-91e8-bda7e3eb78b7",
                      name: "Development",
                      chapter_order: 1,
                      created_at: "2026-07-16T06:52:51.487Z",
                      updated_at: "2026-07-16T06:52:51.487Z",
                    },
                    {
                      id: "50c8463a-13c0-4dd6-83a4-b1bb927eb6e2",
                      book_id: "31273d4a-10c6-4d20-91e8-bda7e3eb78b7",
                      name: "Sectors of the Indian Economy",
                      chapter_order: 2,
                      created_at: "2026-07-16T06:52:51.874Z",
                      updated_at: "2026-07-16T06:52:51.874Z",
                    },
                    {
                      id: "ce86b42c-bda4-4aed-aa75-a8718cf878e7",
                      book_id: "31273d4a-10c6-4d20-91e8-bda7e3eb78b7",
                      name: "Money and Credit",
                      chapter_order: 3,
                      created_at: "2026-07-16T06:52:52.194Z",
                      updated_at: "2026-07-16T06:52:52.194Z",
                    },
                    {
                      id: "0230c866-faa1-4b88-b9d6-4164a6bc138f",
                      book_id: "31273d4a-10c6-4d20-91e8-bda7e3eb78b7",
                      name: "Globalisation and the Indian Economy",
                      chapter_order: 4,
                      created_at: "2026-07-16T06:52:52.514Z",
                      updated_at: "2026-07-16T06:52:52.514Z",
                    },
                    {
                      id: "e0e15927-c873-4f5e-9b4f-4c7e5773057b",
                      book_id: "31273d4a-10c6-4d20-91e8-bda7e3eb78b7",
                      name: "Consumer Rights",
                      chapter_order: 5,
                      created_at: "2026-07-16T06:52:52.834Z",
                      updated_at: "2026-07-16T06:52:52.834Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.is_completed === true;
    if (activeFilter === "pending") return task.is_completed === false;
  });

  return (
    <div className="mx-auto max-w-full px-6 py-8 lg:flex lg:h-[calc(100vh-80px)] lg:gap-8">
      <aside className="mb-6 w-full sticky lg:top-8 lg:mb-0 lg:w-96 lg:self-start">
        <TaskForm onSubmit={createTask} />

        {/* temporary form */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6 mt-5">
          <select
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              setSecondSelectedValue(" ");
            }}
            className="border rounded-2xl text-sm text-gray-800 w-full h-8 px-3 appearance-none"
          >
            <option value=""> Choose Board </option>
            {data.map((board)=> ( <option key={board.id} value={board.id}>{board.name}</option>))}
          </select>

          <select
            value={secondSelectedValue}
            onChange={(e) => {setSecondSelectedValue(e.target.value); setThirdSelectedValue("")}}
            disabled={!selectedValue}
            className="border rounded-2xl text-sm text-gray-800 w-full h-8 px-3 my-5 appearance-none  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
          >
            <option value=""> Choose Class </option>
            {data
              .find(
                (board) => board.id === selectedValue,
              )
              ?.academicClasses.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
          </select>

  <select
            value={thirdSelectedValue}
            onChange={(e) => {setThirdSelectedValue(e.target.value); setFourthSelectedValue("")}}
            disabled={!secondSelectedValue}
            className="border rounded-2xl text-sm text-gray-800 w-full h-8 px-3 mb-5 appearance-none  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
          >
            <option value=""> Choose Subject </option>
            {data.find((board)=> board.id === selectedValue)
              ?.academicClasses.find(
                (academicClass) => academicClass.id === secondSelectedValue,
              )
              ?.subjects.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
          </select>
          <select
            value={fourthSelectedValue}
            onChange={(e) => setFourthSelectedValue(e.target.value)}
            disabled={!thirdSelectedValue}
            className="border rounded-2xl text-sm text-gray-800 w-full h-8 px-3 mb-5 appearance-none  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
          >
            <option value=""> Choose book </option>
            {data.find((board)=> board.id === selectedValue)
              ?.academicClasses.find(
                (academicClass) => academicClass.id === secondSelectedValue,
              )
              ?.subjects.find((subject)=>subject.id === thirdSelectedValue)
              ?.books.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
          </select>
          <select
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            disabled={!fourthSelectedValue}
            className="border rounded-2xl text-sm text-gray-800 w-full h-8 px-3 mb-5 appearance-none  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
          >
            <option value=""> Choose chapter </option>
            {data.find((board)=> board.id === selectedValue)
              ?.academicClasses.find(
                (academicClass) => academicClass.id === secondSelectedValue,
              )
              ?.subjects.find((subject)=>subject.id === thirdSelectedValue)
              ?.books.find((book)=>book.id === fourthSelectedValue)
              ?.chapters.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
          </select>
        
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <div className="sticky top-0 z-10  bg-gray-100 backdrop-blur-lg p-1">
          <TaskFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="mt-4 space-y-4 lg:mt-6 lg:flex-1 lg:overflow-y-auto lg:pr-2">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner size="h-12 w-12" />
            </div>
          ) : tasks.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-500">
              No tasks yet. Create your first task.
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleComplete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
