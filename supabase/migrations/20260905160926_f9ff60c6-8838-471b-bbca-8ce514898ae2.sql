CREATE TABLE public.consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  mobile_number text NOT NULL CHECK (mobile_number ~ '^\+?91[6-9][0-9]{9}$' OR mobile_number ~ '^[6-9][0-9]{9}$'),
  preferred_location text NOT NULL CHECK (preferred_location IN ('Nirmal', 'Khanapur')),
  preferred_date date NOT NULL,
  concern text NOT NULL CHECK (char_length(concern) BETWEEN 10 AND 1000),
  consent_given boolean NOT NULL CHECK (consent_given = true),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consultation_requests TO anon, authenticated;
GRANT ALL ON public.consultation_requests TO service_role;

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a consultation request"
ON public.consultation_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  consent_given = true
  AND preferred_date >= CURRENT_DATE
  AND preferred_location IN ('Nirmal', 'Khanapur')
);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_consultation_requests_updated_at
BEFORE UPDATE ON public.consultation_requests
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();