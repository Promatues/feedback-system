import {
  DB_AddSubmittedForm,
  DB_GetFormByFormID,
  DB_GetFormResponses,
  DB_GetForms,
  DB_GetResponseByFormID,
} from "./data_operations.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const GET_Test = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  res.sendFile(path.join(__dirname, "..","test.html"));
};

export const GET_Forms = async (req, res) => {
  try {
    const forms = await DB_GetForms();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const GET_Responses = async (req, res) => {
  try {
    const responses = await DB_GetFormResponses();
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const GET_FormByID = async (req, res) => {
  try {
    const msforms_form_id_query = req.query.id ? req.query.id : null;
    if (!msforms_form_id_query) {
      res.status(400).json({
        message: "No msforms_form_id specified, nothing to show.",
        correct_syntax: "/formbyid?id=msforms_form_id",
        try_this_form_id: "Q97QyABtNEWjxl_CIYWrmwHypepq4k1ElL_6lzc9HCZUMkdMWDRQSkRCTjMxSDFRNVpXVUs4SlpSTS4u",
      });
      return;
    }
    const form = await DB_GetFormByFormID(msforms_form_id_query);
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
    throw error;
  }
};

export const GET_ResponseByID = async (req, res) => {
  try {
    const msforms_form_id_query = req.query.id ? req.query.id : null;
    if (!msforms_form_id_query) {
      res.status(400).json({
        message: "No msforms_form_id specified, nothing to show.",
        correct_syntax: "/responsebyid?id=msforms_form_id",
        try_this_form_id: "Q97QyABtNEWjxl_CIYWrmwHypepq4k1ElL_6lzc9HCZUMkdMWDRQSkRCTjMxSDFRNVpXVUs4SlpSTS4u",
      });
      return;
    }
    const form = await DB_GetResponseByFormID(msforms_form_id_query);
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
    throw error;
  }
};

export const POST_SubmitForm = async (req, res) => {
  try {
    const {
      response_res_data: { formId, responseId },
      submit_timestamp,
      respondent_email,
      question_response,
      form_name,
    } = req.body[0];

    DB_AddSubmittedForm(
      form_name,
      formId,
      responseId,
      submit_timestamp,
      respondent_email,
      question_response
    );

    res
      .status(200)
      .json({ message: "Form data received and processed successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to process form data" });
  }
};
