create table
  public.study - record (
    id uuid not null default gen_random_uuid (),
    title character varying not null,
    time integer not null,
    created_at timestamp with time zone null default now(),
    constraint study - record_pkey primary key (id)
  ) tablespace pg_default;
  